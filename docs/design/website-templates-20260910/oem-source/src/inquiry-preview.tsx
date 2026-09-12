"use client";

import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from "react";

type DemoState = "idle" | "submitting" | "success" | "error";

export function useDemoSubmission(kind: "OEM" | "ODM") {
  const [state, setState] = useState<DemoState>("idle");
  const [failNext, setFailNext] = useState(false);
  const [receipt, setReceipt] = useState<{ id: string; fields: Record<string, string> } | null>(null);
  const busy = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestId = useRef("");
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function clear() {
    if (busy.current) return;
    setState("idle");
    setReceipt(null);
    requestId.current = "";
  }

  function onEdit(event: FormEvent<HTMLElement>) {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) target.setCustomValidity("");
    clear();
  }

  function submit(form: HTMLFormElement, extra: Record<string, string>) {
    if (busy.current) return;
    for (const field of Array.from(form.elements)) {
      if ((field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.required && field.type !== "checkbox") {
        field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
      }
    }
    if (!form.reportValidity()) return;
    const fields: Record<string, string> = { ...extra };
    for (const [name, value] of new FormData(form).entries()) {
      if (typeof value === "string" && value.trim() && name !== "Project permission") fields[name.replace(/^ODM /, "")] = value.trim();
    }
    requestId.current ||= "DEMO-" + kind + "-" + crypto.randomUUID().slice(0, 8).toUpperCase();
    busy.current = true;
    setState("submitting");
    setReceipt(null);
    timer.current = setTimeout(() => {
      busy.current = false;
      if (failNext) {
        setFailNext(false);
        setState("error");
      } else {
        setReceipt({ id: requestId.current, fields });
        setState("success");
      }
    }, 900);
  }

  return { state, pending: state === "submitting", failNext, setFailNext, receipt, clear, onEdit, submit };
}

type Demo = ReturnType<typeof useDemoSubmission>;

export function DemoFeedback({ demo, onReset }: { demo: Demo; onReset: () => void }) {
  return <>
    {demo.pending && <div className="inquiry-feedback" role="status">Simulating submission. Please wait…</div>}
    {demo.state === "error" && <div className="inquiry-feedback inquiry-error" role="alert"><strong>Simulated submission failed.</strong><p>Your details and selected files are still here. Submit again to retry. Nothing was sent or saved to a server.</p></div>}
    {demo.state === "success" && demo.receipt && <div className="inquiry-feedback inquiry-success" role="status">
      <strong>Demo submission complete</strong>
      <p>Demo reference: <b>{demo.receipt.id}</b></p>
      <p>This is a local preview. No request was saved to a server and no emails were sent.</p>
      <details className="inquiry-receipt"><summary>Review this demo request</summary><dl>{Object.entries(demo.receipt.fields).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></details>
      <button type="button" className="text-link inquiry-reset" onClick={onReset}>Start another demo request</button>
    </div>}
    <details className="inquiry-review-tools">
      <summary>Internal preview testing</summary>
      <label><input type="checkbox" checked={demo.failNext} onChange={event => demo.setFailNext(event.target.checked)} /> Simulate a failed submission once</label>
      <p>Preview control only. The next retry will simulate success.</p>
    </details>
  </>;
}

const allowedTypes: Record<string, string[]> = {
  pdf: ["application/pdf"],
  docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  png: ["image/png"],
  jpg: ["image/jpeg"],
  jpeg: ["image/jpeg"],
};

export function AttachmentPicker({ files, onChange }: { files: File[]; onChange: (files: File[]) => void }) {
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  function addFiles(event: ChangeEvent<HTMLInputElement>) {
    const incoming = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = "";
    if (!incoming.length) return;
    if (files.length + incoming.length > 3) {
      setError("Files were not added. Choose up to 3 files in total; remove an existing file first.");
      return;
    }
    for (const file of incoming) {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      const types = allowedTypes[extension];
      if (!types || (file.type && !types.includes(file.type))) {
        setError(file.name + ": not added. Use PDF, DOCX, PNG or JPG/JPEG.");
        return;
      }
      if (!file.size || file.size > 5 * 1024 * 1024) {
        setError(file.name + ": not added. Use a non-empty file of 5 MB or smaller.");
        return;
      }
    }
    setError("");
    onChange([...files, ...incoming]);
  }
  return <div className="inquiry-attachments">
    <label htmlFor="odm-project-files">Project files <span>(optional)</span></label>
    <p id="odm-files-help">PDF, DOCX, PNG or JPG/JPEG · up to 3 files · 5 MB each. Files stay on this device in this preview.</p>
    <button type="button" className="button-secondary inquiry-file-select" onClick={() => inputRef.current?.click()} aria-describedby="odm-files-help">Choose files</button>
    <input ref={inputRef} id="odm-project-files" type="file" multiple accept=".pdf,.docx,.png,.jpg,.jpeg" onChange={addFiles} aria-describedby={error ? "odm-files-help odm-files-error" : "odm-files-help"} aria-invalid={!!error} />
    {error && <p id="odm-files-error" className="inquiry-file-error" role="alert">{error}</p>}
    <ul aria-label="Selected project files">{files.map((file, index) => <li key={index + "-" + file.name}>
      <span><b>{file.name}</b><small>{file.size < 1024 ? file.size + " bytes" : file.size < 1024 * 1024 ? Math.ceil(file.size / 1024) + " KB" : (file.size / (1024 * 1024)).toFixed(2) + " MB"}</small></span>
      <button type="button" aria-label={"Remove " + file.name} onClick={() => { setError(""); onChange(files.filter((_, i) => i !== index)); }}>Remove</button>
    </li>)}</ul>
    <p className="inquiry-file-count" aria-live="polite">{files.length ? files.length + " of 3 files selected" : "No files selected. You can submit without attachments."}</p>
  </div>;
}
