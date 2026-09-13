(() => {
  const models = {YP7101: 'LED', YP7201: 'LCD', YP7202: 'LCD with backlight'};
  const panel = document.getElementById('model-detail');
  const title = document.getElementById('model-title');
  const buttons = [...document.querySelectorAll('[data-bp-model]')];
  // Technical requirements pp. 1, 3, 6, 10–11; workbook 血压计!B33 supplies weight.
  function showModel(model, scroll = true) {
    if (!Object.hasOwn(models, model)) return;
    panel.hidden = false;
    title.textContent = model + ' Upper-Arm Blood Pressure Monitor';
    document.getElementById('model-series').textContent = 'Upper-arm / 臂式';
    const placeholder = document.createElement('span');
    placeholder.textContent = '[' + model + ' 产品图待对应]';
    document.getElementById('model-photo').replaceChildren(placeholder);
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.bpModel === model)));
    const specs = [
      ['Measurement', 'Oscillometric method\nMeasurement during deflation\nUpper arm'],
      ['Static pressure', 'Range: 0–290 mmHg\nAccuracy: ±3 mmHg*\nResolution: 1 mmHg'],
      ['BP display range', 'Systolic: at least 60–230 mmHg\nDiastolic: at least 40–130 mmHg'],
      ['Pulse rate', 'Range: 40–199 bpm\nAccuracy: ±5%\nResolution: 1 bpm'],
      ['Cuff options', 'Adult arm circumference\nYM-C001A: 22–32 cm\nYM-C002A: 22–36 cm'],
      ['Display & memory', models[model] + '\nVoice readout\n2 users × 120 records'],
      ['Power supply', '3.7 V, 1200 mAh lithium battery\nType-C input: 5 V, 1 A'],
      ['Dimensions & weight', '138 × 102 × 61.5 mm (L × W × H)\nApprox. 340 g (excluding cuff)'],
    ];
    document.getElementById('model-specs').replaceChildren(...specs.map(([label, value]) => {
      const row = document.createElement('tr');
      const heading = document.createElement('th');
      heading.scope = 'row';
      heading.textContent = label;
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(heading, cell);
      return row;
    }));
    document.getElementById('model-spec-note').textContent = '*Static pressure accuracy under the specified test conditions: 10–40°C and 15–85% RH, non-condensing. This specification refers to static pressure testing; it is not a clinical blood pressure accuracy result.';
    document.getElementById('model-inquiry').href = 'contact.html?' + new URLSearchParams({category:'bp',sub:'upper-arm',model});
    const url = new URL(location.href);
    url.searchParams.set('model', model);
    history.replaceState(null, '', url);
    if (scroll) {
      panel.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
      title.focus({preventScroll: true});
    }
  }
  buttons.forEach(button => button.addEventListener('click', () => showModel(button.dataset.bpModel)));
  const selected = new URLSearchParams(location.search).get('model');
  if (selected) showModel(selected, false);
})();
