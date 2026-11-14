(()=>{
const workflows={oem:[['Confirm the model','Share your product category, preferred model and target market.','Model and configuration review'],['Define the customization','Share branding, packaging and configuration requirements.','Agreed scope, responsibilities and required information'],['Review the sample','Review the sample against the agreed requirements.','Sample review notes and required changes'],['Prepare production','Confirm production and documentation requirements for the project.','Production preparation and delivery conditions']],odm:[['Define the requirement','Share intended use, functions and target-market requirements.','Requirements, scope and constraints'],['Review feasibility','Discuss product design, structure, functions and development scope.','Feasibility review and project stages'],['Develop & review','Develop prototypes and review milestones as agreed.','Prototypes, revisions and verification planning'],['Confirm the next stage','Review design outputs and manufacturing requirements.','Next-stage verification and production preparation']]};
const list=document.querySelector('#workflow-list');
function setPath(path){if(!workflows[path])path='oem';document.querySelectorAll('[data-path]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.path===path));document.querySelector('.workflow-label').textContent=path==='oem'?'Existing-model customization':'New product or modification project';list.innerHTML=workflows[path].map((s,i)=>'<article class="workflow-step"><span>0'+(i+1)+'</span><div><small>PROJECT INPUT</small><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div><div class="step-output"><small>STAGE OUTPUT</small><p>'+s[2]+'</p></div></article>').join('');document.querySelector('#path-inquiry').href='contact.html?path='+path;}
if(list){setPath('oem');document.querySelectorAll('[data-path]').forEach(b=>b.onclick=()=>setPath(b.dataset.path));}
const form = document.querySelector('#project-form');
if (!form) return;
const category = document.querySelector('#category');
const sub = document.querySelector('#subcategory');
const subField = document.querySelector('#subcategory-field');
const model = document.querySelector('#model');
const path = document.querySelector('#project-path');
const request = document.querySelector('#request');
const configuration = document.querySelector('#configuration');
const modelReturn = document.querySelector('#model-return');
const types = {
  pulse: [['fingertip', 'Fingertip'], ['handheld', 'Handheld']],
  bp: [['upper-arm', 'Upper-arm']],
  nebulizer: [['compressor', 'Compressor nebulizers'], ['mesh', 'Handheld mesh nebulizers']],
  thermometer: [['forehead', 'Forehead thermometers'], ['patch', 'Temperature patches']],
};
const pulseModels = ['YM101','YM103','YM201','YM301','YM302','YM111','YM211','YM112','YM212','YM401','YM403','YM501','YM503','YM603','YH01','YH02'];
const bpModels = ['YP7101','YP7201','YP7202'];
function updateSub() {
  const options = types[category.value];
  subField.hidden = !options;
  sub.disabled = !options;
  sub.replaceChildren(new Option('Select a subcategory (optional)', ''));
  (options || []).forEach(([value, label]) => sub.add(new Option(label, value)));
}
function updateModelLink() {
  const value = model.value.trim().toUpperCase();
  const valid = category.value === 'pulse' ? pulseModels.includes(value) : category.value === 'bp' && bpModels.includes(value);
  modelReturn.hidden = !valid;
  if (valid) modelReturn.href = window.YimiModelPages[value] || (category.value === 'pulse' ? 'pulse.html' : 'bp.html') + '?model=' + encodeURIComponent(value);
  else modelReturn.removeAttribute('href');
}
const query = new URLSearchParams(location.search);
const allowedCategories = ['pulse','bp','wearable','nebulizer','thermometer','undecided'];
if (allowedCategories.includes(query.get('category'))) category.value = query.get('category');
updateSub();
if ([...sub.options].some(option => option.value === query.get('sub'))) sub.value = query.get('sub');
if (['oem','odm'].includes(query.get('path'))) {
  path.value = query.get('path');
  request.value = path.value === 'oem' ? 'I would like to discuss customization of an existing YimiLife model.' : 'I would like to discuss a new product or modifications to an existing product.';
}
const requestedModel = query.get('model');
if ((category.value === 'pulse' && pulseModels.includes(requestedModel)) || (category.value === 'bp' && bpModels.includes(requestedModel))) {
  model.value = requestedModel;
  sub.value = category.value === 'bp' ? 'upper-arm' : requestedModel.startsWith('YH') ? 'handheld' : 'fingertip';
  request.value = 'I would like to discuss ' + requestedModel + ' configurations and an OEM/ODM project.';
}
const requestedDocument = query.get('document');
const isDocumentRequest = ['catalog', 'manual', 'regulatory'].includes(requestedDocument);
function documentRequestText() {
  const value = model.value.trim().toUpperCase();
  const validModel = (category.value === 'pulse' && pulseModels.includes(value)) || (category.value === 'bp' && bpModels.includes(value));
  const subject = validModel ? value : 'the model and configuration I am evaluating';
  if (requestedDocument === 'catalog') return 'I would like to request the YimiLife product catalog for my sourcing project.';
  if (requestedDocument === 'manual') return 'I would like to request the English user manual for ' + subject + '.';
  return 'I would like to discuss the CE, FDA or NMPA documents applicable to ' + subject + ' and my target market.';
}
if (isDocumentRequest) request.value = documentRequestText();
configuration.value = (query.get('configuration') || '').slice(0,1000).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'');
if (configuration.value) document.querySelector('.optional-fields').open = true;
updateModelLink();
let initialRequest = request.value;
function modelConflicts() {
  const value = model.value.trim().toUpperCase();
  return (pulseModels.includes(value) && category.value !== 'pulse') || (bpModels.includes(value) && category.value !== 'bp');
}
category.addEventListener('change', () => {
  const updateDocumentRequest = isDocumentRequest && request.value === initialRequest;
  if (modelConflicts()) {
    model.value = '';
    if (request.value === initialRequest) request.value = '';
  }
  updateSub();
  updateModelLink();
  if (updateDocumentRequest) request.value = initialRequest = documentRequestText();
  check(model);
});
model.addEventListener('input', () => {
  updateModelLink();
  const value = model.value.trim().toUpperCase();
  if (isDocumentRequest && category.value === 'pulse' && pulseModels.includes(value)) sub.value = value.startsWith('YH') ? 'handheld' : 'fingertip';
  if (isDocumentRequest && category.value === 'bp' && bpModels.includes(value)) sub.value = 'upper-arm';
  if (isDocumentRequest && request.value === initialRequest) request.value = initialRequest = documentRequestText();
});

const status = document.querySelector('#form-status');
const review = document.querySelector('#submit-project');
const summary = document.querySelector('#inquiry-summary');
const summaryFields = document.querySelector('#summary-fields');
const confirm = document.querySelector('#confirm-preview');
const failure = document.querySelector('#simulate-failure');
const checkedFields = [...form.querySelectorAll('[required]'), model];
let timer = null;
let busy = false;
let revision = 0;
let reference = '';
let reviewed = false;
function clearFeedback() {
  revision++;
  if (timer) clearTimeout(timer);
  timer = null;
  busy = false;
  reviewed = false;
  reference = '';
  summary.hidden = true;
  status.hidden = true;
  review.disabled = false;
  confirm.disabled = false;
  confirm.textContent = 'Simulate submission →';
}
function check(field) {
  let message = '';
  if (field.required && !field.value.trim()) message = 'Please complete this field.';
  else if (field.type === 'email' && field.validity.typeMismatch) message = 'Enter a valid email address.';
  else if (field === model && modelConflicts()) message = 'Choose the matching product category or update this model.';
  field.setAttribute('aria-invalid', String(Boolean(message)));
  document.getElementById(field.id + '-error').textContent = message;
  return !message;
}
function validate() {
  let first = null;
  checkedFields.forEach(field => { if (!check(field) && !first) first = field; });
  if (first) {
    status.hidden = false;
    status.className = 'form-status error';
    status.textContent = 'Please check the highlighted fields. Nothing has been sent.';
    first.focus();
  }
  return !first;
}
form.addEventListener('input', event => {
  if (event.target === failure) return;
  clearFeedback();
  if (checkedFields.includes(event.target) && event.target.getAttribute('aria-invalid') === 'true') check(event.target);
});
form.addEventListener('change', event => {
  if (event.target === failure) return;
  clearFeedback();
  if (checkedFields.includes(event.target)) check(event.target);
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (busy) return;
  if (!validate()) {summary.hidden = true; reviewed = false; return;}
  summaryFields.replaceChildren();
  const fields = [
    ['Name','name'],['Email','email'],['Company','company'],['Product category','category'],
    ['Subcategory','subcategory'],['Project type','project-path'],['Preferred model','model'],
    ['Requirements','request'],['Target market','market'],['Estimated quantity','quantity'],
    ['Timeline','timeline'],['Configuration notes','configuration'],
  ];
  for (const [label, id] of fields) {
    const field = document.getElementById(id);
    if (field.disabled || !field.value.trim()) continue;
    const row = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = label;
    dd.textContent = field.tagName === 'SELECT' ? field.selectedOptions[0].textContent : field.value.trim();
    row.append(dt,dd); summaryFields.append(row);
  }
  reviewed = true;
  status.hidden = true;
  summary.hidden = false;
  document.getElementById('summary-title').focus();
});
document.getElementById('edit-inquiry').addEventListener('click', () => {
  clearFeedback();
  request.focus();
});
confirm.addEventListener('click', () => {
  if (busy || !reviewed || !validate()) return;
  busy = true;
  const currentRevision = revision;
  const fail = failure.checked;
  failure.checked = false;
  reference ||= 'DEMO-' + crypto.randomUUID().slice(0,8).toUpperCase();
  review.disabled = true;
  confirm.disabled = true;
  confirm.textContent = 'Simulating…';
  status.hidden = false;
  status.className = 'form-status';
  status.textContent = 'Simulating submission. Nothing is being sent or saved to a server.';
  timer = setTimeout(() => {
    if (revision !== currentRevision) return;
    timer = null;
    busy = false;
    review.disabled = false;
    status.className = 'form-status' + (fail ? ' error' : '');
    if (fail) {
      confirm.disabled = false;
      confirm.textContent = 'Retry simulation →';
      status.textContent = 'Simulated submission failed. Your details are still here. Retry when ready. Nothing was sent or saved to a server.';
    } else {
      confirm.textContent = 'Simulation complete';
      status.textContent = 'Demo submission complete. Demo reference: ' + reference + '. Nothing was sent or saved to a server, and no email was sent. Use Edit details to prepare another preview.';
    }
  }, 700);
});
review.disabled = false;
})();
