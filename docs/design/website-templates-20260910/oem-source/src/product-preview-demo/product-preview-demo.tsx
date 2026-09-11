"use client";

import Image from "next/image";
import { type ChangeEvent, type ReactNode, useRef, useState } from "react";

type ColorId = "white" | "aqua" | "navy";
type LogoTone = "original" | "dark" | "light";

type ProductPreviewDemoProps = {
  children?: ReactNode;
  embedded?: boolean;
  sectionId?: string;
  onColorChange?: (colorName: string) => void;
  onLogoChange?: (fileName: string | null) => void;
};

const defaultLogoAdjustments = {
  offsetX: -2,
  offsetY: 2,
  rotation: 2,
  scale: 112,
  width: 100,
  height: 100,
};

const colors: Array<{
  id: ColorId;
  name: string;
  hex: string;
  image: string;
}> = [
  {
    id: "white",
    name: "White",
    hex: "#f8fafc",
    image: "/oem-odm/product-preview-demo/pulse-oximeter-white.png",
  },
  {
    id: "aqua",
    name: "Aqua",
    hex: "#55c5c8",
    image: "/oem-odm/product-preview-demo/pulse-oximeter-aqua.png",
  },
  {
    id: "navy",
    name: "Navy",
    hex: "#31526f",
    image: "/oem-odm/product-preview-demo/pulse-oximeter-navy.png",
  },
];

const logoTones: Array<{ id: LogoTone; name: string }> = [
  { id: "original", name: "Original" },
  { id: "dark", name: "Dark" },
  { id: "light", name: "White" },
];

function prepareLogoPreview(dataUrl: string) {
  return new Promise<string>((resolve) => {
    const sourceImage = new window.Image();

    sourceImage.onerror = () => resolve(dataUrl);
    sourceImage.onload = () => {
      const maxDimension = 1600;
      const scale = Math.min(1, maxDimension / Math.max(sourceImage.width, sourceImage.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(sourceImage.width * scale));
      canvas.height = Math.max(1, Math.round(sourceImage.height * scale));

      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) {
        resolve(dataUrl);
        return;
      }

      context.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const cornerOffsetX = Math.max(0, Math.floor(canvas.width * 0.01));
      const cornerOffsetY = Math.max(0, Math.floor(canvas.height * 0.01));
      const corners = [
        [cornerOffsetX, cornerOffsetY],
        [canvas.width - 1 - cornerOffsetX, cornerOffsetY],
        [cornerOffsetX, canvas.height - 1 - cornerOffsetY],
        [canvas.width - 1 - cornerOffsetX, canvas.height - 1 - cornerOffsetY],
      ];

      const whiteCornerCount = corners.filter(([x, y]) => {
        const index = (y * canvas.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        return alpha > 240 && Math.min(red, green, blue) > 245 && Math.max(red, green, blue) - Math.min(red, green, blue) < 10;
      }).length;

      if (whiteCornerCount >= 3) {
        for (let index = 0; index < pixels.length; index += 4) {
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const lightestDarkChannel = Math.min(red, green, blue);
          const colorSpread = Math.max(red, green, blue) - lightestDarkChannel;

          if (lightestDarkChannel > 240 && colorSpread < 18) {
            const remainingOpacity = Math.max(0, Math.min(1, (255 - lightestDarkChannel) / 15));
            pixels[index + 3] = Math.round(pixels[index + 3] * remainingOpacity);
          }
        }

        context.putImageData(imageData, 0, 0);
      }

      resolve(canvas.toDataURL("image/png"));
    };

    sourceImage.src = dataUrl;
  });
}

type Point = [number, number];

const perspectiveCanvas = {
  width: 600,
  height: 300,
  sourceWidth: 600,
  sourceHeight: 140,
  // Calibrated from the display plane in the 1365 × 1152 demo image.
  // Its long and short edges share the same vanishing directions as the display bezel.
  corners: [
    [125, 26],
    [575, 219],
    [475, 274],
    [25, 76],
  ] as [Point, Point, Point, Point],
};

function solveLinearSystem(matrix: number[][], values: number[]) {
  const size = values.length;
  const rows = matrix.map((row, index) => [...row, values[index]]);

  for (let column = 0; column < size; column += 1) {
    let pivotRow = column;

    for (let row = column + 1; row < size; row += 1) {
      if (Math.abs(rows[row][column]) > Math.abs(rows[pivotRow][column])) {
        pivotRow = row;
      }
    }

    [rows[column], rows[pivotRow]] = [rows[pivotRow], rows[column]];
    const pivot = rows[column][column];

    if (Math.abs(pivot) < 1e-10) {
      return null;
    }

    for (let item = column; item <= size; item += 1) {
      rows[column][item] /= pivot;
    }

    for (let row = 0; row < size; row += 1) {
      if (row === column) {
        continue;
      }

      const factor = rows[row][column];
      for (let item = column; item <= size; item += 1) {
        rows[row][item] -= factor * rows[column][item];
      }
    }
  }

  return rows.map((row) => row[size]);
}

function createDestinationToSourceTransform(corners: [Point, Point, Point, Point]) {
  const sourceCorners: [Point, Point, Point, Point] = [
    [0, 0],
    [perspectiveCanvas.sourceWidth - 1, 0],
    [perspectiveCanvas.sourceWidth - 1, perspectiveCanvas.sourceHeight - 1],
    [0, perspectiveCanvas.sourceHeight - 1],
  ];
  const matrix: number[][] = [];
  const values: number[] = [];

  corners.forEach(([x, y], index) => {
    const [sourceX, sourceY] = sourceCorners[index];
    matrix.push([x, y, 1, 0, 0, 0, -sourceX * x, -sourceX * y]);
    values.push(sourceX);
    matrix.push([0, 0, 0, x, y, 1, -sourceY * x, -sourceY * y]);
    values.push(sourceY);
  });

  return solveLinearSystem(matrix, values);
}

function warpLogoToProductSurface(dataUrl: string) {
  return new Promise<string>((resolve) => {
    const logoImage = new window.Image();

    logoImage.onerror = () => resolve(dataUrl);
    logoImage.onload = () => {
      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = perspectiveCanvas.sourceWidth;
      sourceCanvas.height = perspectiveCanvas.sourceHeight;
      const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });

      const outputCanvas = document.createElement("canvas");
      outputCanvas.width = perspectiveCanvas.width;
      outputCanvas.height = perspectiveCanvas.height;
      const outputContext = outputCanvas.getContext("2d");

      if (!sourceContext || !outputContext) {
        resolve(dataUrl);
        return;
      }

      const horizontalPadding = 24;
      const verticalPadding = 12;
      const availableWidth = sourceCanvas.width - horizontalPadding * 2;
      const availableHeight = sourceCanvas.height - verticalPadding * 2;
      const fitScale = Math.min(
        availableWidth / logoImage.width,
        availableHeight / logoImage.height,
      );
      const drawWidth = logoImage.width * fitScale;
      const drawHeight = logoImage.height * fitScale;

      sourceContext.drawImage(
        logoImage,
        (sourceCanvas.width - drawWidth) / 2,
        (sourceCanvas.height - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );

      const coefficients = createDestinationToSourceTransform(perspectiveCanvas.corners);
      if (!coefficients) {
        resolve(dataUrl);
        return;
      }

      const sourcePixels = sourceContext.getImageData(
        0,
        0,
        sourceCanvas.width,
        sourceCanvas.height,
      );
      const outputPixels = outputContext.createImageData(
        outputCanvas.width,
        outputCanvas.height,
      );
      const [a, b, c, d, e, f, g, h] = coefficients;

      for (let y = 0; y < outputCanvas.height; y += 1) {
        for (let x = 0; x < outputCanvas.width; x += 1) {
          const denominator = g * x + h * y + 1;
          if (Math.abs(denominator) < 1e-10) {
            continue;
          }

          const sourceX = (a * x + b * y + c) / denominator;
          const sourceY = (d * x + e * y + f) / denominator;

          if (
            sourceX < 0 ||
            sourceY < 0 ||
            sourceX >= sourceCanvas.width ||
            sourceY >= sourceCanvas.height
          ) {
            continue;
          }

          const outputIndex = (y * outputCanvas.width + x) * 4;
          const sourceX0 = Math.floor(sourceX);
          const sourceY0 = Math.floor(sourceY);
          const sourceX1 = Math.min(sourceCanvas.width - 1, sourceX0 + 1);
          const sourceY1 = Math.min(sourceCanvas.height - 1, sourceY0 + 1);
          const horizontalWeight = sourceX - sourceX0;
          const verticalWeight = sourceY - sourceY0;
          const samples = [
            [sourceX0, sourceY0, (1 - horizontalWeight) * (1 - verticalWeight)],
            [sourceX1, sourceY0, horizontalWeight * (1 - verticalWeight)],
            [sourceX0, sourceY1, (1 - horizontalWeight) * verticalWeight],
            [sourceX1, sourceY1, horizontalWeight * verticalWeight],
          ];
          let alphaSum = 0;
          let redSum = 0;
          let greenSum = 0;
          let blueSum = 0;

          samples.forEach(([sampleX, sampleY, weight]) => {
            const sourceIndex = (sampleY * sourceCanvas.width + sampleX) * 4;
            const weightedAlpha = sourcePixels.data[sourceIndex + 3] * weight;
            alphaSum += weightedAlpha;
            redSum += sourcePixels.data[sourceIndex] * weightedAlpha;
            greenSum += sourcePixels.data[sourceIndex + 1] * weightedAlpha;
            blueSum += sourcePixels.data[sourceIndex + 2] * weightedAlpha;
          });

          if (alphaSum > 0) {
            outputPixels.data[outputIndex] = Math.round(redSum / alphaSum);
            outputPixels.data[outputIndex + 1] = Math.round(greenSum / alphaSum);
            outputPixels.data[outputIndex + 2] = Math.round(blueSum / alphaSum);
            outputPixels.data[outputIndex + 3] = Math.round(alphaSum);
          }
        }
      }

      outputContext.putImageData(outputPixels, 0, 0);
      resolve(outputCanvas.toDataURL("image/png"));
    };

    logoImage.src = dataUrl;
  });
}

function UploadIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V4m0 0L7 9m5-5 5 5M5 15v4h14v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m7 7 10 10M17 7 7 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function AdjustmentSlider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <label htmlFor={id} className="block min-w-0">
      <span className="flex items-center justify-between gap-2 text-[0.7rem] font-semibold text-slate-700">
        <span>{label}</span>
        <output htmlFor={id} className="font-normal tabular-nums text-slate-500">
          {value}
          {unit}
        </output>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-1.5 w-full accent-brand-700"
      />
    </label>
  );
}

export function ProductPreviewDemo({
  children,
  embedded = false,
  sectionId,
  onColorChange,
  onLogoChange,
}: ProductPreviewDemoProps = {}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedColor, setSelectedColor] = useState<ColorId>("aqua");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);
  const [logoTone, setLogoTone] = useState<LogoTone>("original");
  const [logoScale, setLogoScale] = useState(defaultLogoAdjustments.scale);
  const [logoOffsetX, setLogoOffsetX] = useState(defaultLogoAdjustments.offsetX);
  const [logoOffsetY, setLogoOffsetY] = useState(defaultLogoAdjustments.offsetY);
  const [logoRotation, setLogoRotation] = useState(defaultLogoAdjustments.rotation);
  const [logoWidth, setLogoWidth] = useState(defaultLogoAdjustments.width);
  const [logoHeight, setLogoHeight] = useState(defaultLogoAdjustments.height);
  const [fileError, setFileError] = useState<string | null>(null);

  const activeColor = colors.find((color) => color.id === selectedColor) ?? colors[1];

  function handleLogoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!(["image/png", "image/jpeg"] as string[]).includes(file.type)) {
      setFileError("Please upload a PNG, JPG or JPEG file.");
      event.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setFileError("The logo file must be 2 MB or smaller.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === "string") {
        const preparedPreview = await prepareLogoPreview(reader.result);
        const perspectivePreview = await warpLogoToProductSurface(preparedPreview);
        setLogoPreview(perspectivePreview);
        setLogoFileName(file.name);
        setFileError(null);
        onLogoChange?.(file.name);
      }
    };
    reader.readAsDataURL(file);
  }

  function removeLogo() {
    setLogoPreview(null);
    setLogoFileName(null);
    setFileError(null);
    resetLogoAdjustments();
    onLogoChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function resetLogoAdjustments() {
    setLogoOffsetX(defaultLogoAdjustments.offsetX);
    setLogoOffsetY(defaultLogoAdjustments.offsetY);
    setLogoRotation(defaultLogoAdjustments.rotation);
    setLogoScale(defaultLogoAdjustments.scale);
    setLogoWidth(defaultLogoAdjustments.width);
    setLogoHeight(defaultLogoAdjustments.height);
  }

  async function useSampleLogo() {
    const preparedPreview = await prepareLogoPreview("/homepage/P2/Yimilife-logo.png");
    const perspectivePreview = await warpLogoToProductSurface(preparedPreview);
    setLogoPreview(perspectivePreview);
    setLogoFileName("YimiLife sample logo");
    setFileError(null);
    onLogoChange?.("YimiLife sample logo");
  }

  const logoFilter =
    logoTone === "dark"
      ? "brightness(0)"
      : logoTone === "light"
        ? "brightness(0) invert(1)"
        : "contrast(0.96) saturate(0.9)";

  return (
    <section
      id={sectionId}
      className={`${embedded ? "scroll-mt-20 bg-white py-16 lg:py-20" : "site-section"} overflow-hidden`}
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            {embedded ? "OEM brand preview" : "Visual configurator demo"}
          </span>
          {embedded ? (
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Configure Your Product &amp; Brand Preview
            </h2>
          ) : (
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Product Color &amp; Logo Preview
            </h1>
          )}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            Choose a product model and shell color, then upload your logo and adjust its placement.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[minmax(19rem,0.72fr)_minmax(0,1.55fr)]">
            <div className="border-b border-slate-200 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                  1
                </span>
                {embedded ? (
                  <h3 className="text-base font-semibold text-slate-950">Product model</h3>
                ) : (
                  <h2 className="text-base font-semibold text-slate-950">Product model</h2>
                )}
              </div>

              <label className="mt-4 block text-xs font-semibold text-slate-700">
                Demo model
                <select
                  aria-label="Product model"
                  defaultValue="pulse-oximeter-demo"
                  className="site-control mt-2 w-full border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="pulse-oximeter-demo">Pulse Oximeter · Demo Model</option>
                </select>
              </label>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                  2
                </span>
                {embedded ? (
                  <h3 className="text-base font-semibold text-slate-950">Shell color</h3>
                ) : (
                  <h2 className="text-base font-semibold text-slate-950">Shell color</h2>
                )}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Shell color">
                {colors.map((color) => {
                  const isActive = color.id === selectedColor;

                  return (
                    <button
                      key={color.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => {
                        setSelectedColor(color.id);
                        onColorChange?.(color.name);
                      }}
                      className={`min-h-20 rounded-lg border px-3 py-3 text-left transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-300 ${
                        isActive
                          ? "border-brand-500 bg-brand-50 shadow-[inset_0_0_0_1px_var(--yimi-brand-500)]"
                          : "border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className="block h-6 w-6 rounded-full border border-slate-300 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                        aria-hidden="true"
                      />
                      <span className="mt-2 block text-xs font-semibold text-slate-700">
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                  3
                </span>
                {embedded ? (
                  <h3 className="text-base font-semibold text-slate-950">Brand artwork</h3>
                ) : (
                  <h2 className="text-base font-semibold text-slate-950">Brand artwork</h2>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".png,.jpg,.jpeg,image/png,image/jpeg"
                className="sr-only"
                onChange={handleLogoChange}
              />

              <button
                type="button"
                className="button-secondary mt-4 w-full gap-2"
                onClick={() => fileInputRef.current?.click()}
              >
                <UploadIcon />
                {logoPreview ? "Replace logo" : "Upload logo"}
              </button>

              {!logoPreview ? (
                <button
                  type="button"
                  onClick={useSampleLogo}
                  className="mt-3 text-xs font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Preview with sample logo
                </button>
              ) : null}

              <p className="mt-2 text-xs leading-5 text-slate-500">
                PNG, JPG or JPEG · 2 MB max · white backgrounds are reduced locally when detected
              </p>

              {fileError ? (
                <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700" role="alert">
                  {fileError}
                </p>
              ) : null}

              {logoPreview ? (
                <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 truncate text-xs font-medium text-slate-700">
                      {logoFileName}
                    </span>
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                    >
                      <RemoveIcon />
                      Remove
                    </button>
                  </div>

                  <fieldset className="mt-5">
                    <legend className="text-xs font-semibold text-slate-700">Logo treatment</legend>
                    <div className="mt-2 grid grid-cols-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
                      {logoTones.map((tone) => (
                        <button
                          key={tone.id}
                          type="button"
                          aria-pressed={logoTone === tone.id}
                          onClick={() => setLogoTone(tone.id)}
                          className={`min-h-10 border-r border-slate-200 px-2 text-xs font-semibold last:border-r-0 ${
                            logoTone === tone.id
                              ? "bg-brand-700 text-white"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {tone.name}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-slate-700">Placement &amp; shape</p>
                      <button
                        type="button"
                        onClick={resetLogoAdjustments}
                        className="text-[0.7rem] font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                      >
                        Reset
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4">
                      <AdjustmentSlider
                        id="logo-position-x"
                        label="Horizontal"
                        value={logoOffsetX}
                        min={-32}
                        max={32}
                        unit="px"
                        onChange={setLogoOffsetX}
                      />
                      <AdjustmentSlider
                        id="logo-position-y"
                        label="Vertical"
                        value={logoOffsetY}
                        min={-32}
                        max={32}
                        unit="px"
                        onChange={setLogoOffsetY}
                      />
                      <AdjustmentSlider
                        id="logo-scale"
                        label="Overall size"
                        value={logoScale}
                        min={40}
                        max={180}
                        unit="%"
                        onChange={setLogoScale}
                      />
                      <AdjustmentSlider
                        id="logo-rotation"
                        label="Rotation"
                        value={logoRotation}
                        min={-12}
                        max={16}
                        step={0.5}
                        unit="°"
                        onChange={setLogoRotation}
                      />
                      <AdjustmentSlider
                        id="logo-width"
                        label="Width"
                        value={logoWidth}
                        min={64}
                        max={136}
                        unit="%"
                        onChange={setLogoWidth}
                      />
                      <AdjustmentSlider
                        id="logo-height"
                        label="Height"
                        value={logoHeight}
                        min={64}
                        max={136}
                        unit="%"
                        onChange={setLogoHeight}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

            <div className="relative flex min-h-[32rem] flex-col bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f8fafc_58%,#eef3f5_100%)] p-5 md:min-h-[42rem] md:p-8">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Live preview
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Pulse Oximeter · {activeColor.name}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500 backdrop-blur">
                Demo model
              </span>
            </div>

            <div className="relative my-auto aspect-[1365/1152] w-full">
              {colors.map((color) => (
                <Image
                  key={color.id}
                  src={color.image}
                  alt={color.id === selectedColor ? `${color.name} fingertip pulse oximeter preview` : ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  aria-hidden={color.id !== selectedColor}
                  className={`object-contain transition-opacity duration-300 ${
                    color.id === selectedColor ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                />
              ))}

              <div
                className="absolute left-[65.4%] top-[11.6%] z-10 h-[10%] w-[17.3%] origin-center"
                style={{
                  transform: `translate(${logoOffsetX}px, ${logoOffsetY}px) rotate(${logoRotation}deg) scale(${logoScale / 100}) scaleX(${logoWidth / 100}) scaleY(${logoHeight / 100})`,
                }}
              >
                {logoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element -- local FileReader previews cannot use next/image.
                  <img
                    src={logoPreview}
                    alt="Perspective-adjusted logo positioned on the product shell"
                    className="h-full w-full object-contain"
                    style={{
                      filter: logoFilter,
                      mixBlendMode: logoTone === "light" ? "screen" : "multiply",
                      opacity: logoTone === "original" ? 0.88 : 0.92,
                    }}
                  />
                ) : (
                  <svg
                    className="h-full w-full"
                    viewBox={`0 0 ${perspectiveCanvas.width} ${perspectiveCanvas.height}`}
                    aria-label="Perspective logo placement area"
                    role="img"
                  >
                    <polygon
                      points={perspectiveCanvas.corners.map((point) => point.join(",")).join(" ")}
                      fill={selectedColor === "navy" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.12)"}
                      stroke={selectedColor === "navy" ? "rgba(255,255,255,0.62)" : "rgba(71,85,105,0.58)"}
                      strokeWidth="3"
                      strokeDasharray="10 8"
                    />
                    <text
                      x="292"
                      y="157"
                      fill={selectedColor === "navy" ? "rgba(255,255,255,0.76)" : "rgba(71,85,105,0.7)"}
                      fontSize="24"
                      fontWeight="600"
                      letterSpacing="3"
                      textAnchor="middle"
                      transform="rotate(24 292 157)"
                    >
                      YOUR LOGO
                    </text>
                  </svg>
                )}
              </div>
            </div>

            <p className="relative z-10 mx-auto max-w-2xl text-center text-xs leading-5 text-slate-500">
              Visual reference only. Final color, artwork size and print position are confirmed during sampling.
            </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
