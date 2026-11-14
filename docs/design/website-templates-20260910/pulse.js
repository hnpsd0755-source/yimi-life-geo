(() => {
  const models = JSON.parse(document.getElementById('pulse-model-data').textContent);
  const panel = document.getElementById('model-detail');
  const title = document.getElementById('model-title');
  const photo = document.getElementById('model-photo');
  const rows = document.getElementById('model-specs');
  const values = {No: 'Not included', Yes: 'Included', Optional: 'Optional', TBD: 'To be confirmed'};
  // Source: 产品参数.xlsx, 指夹血氧仪!B13:B17.
  const fingertipDimensions = {
    'YM01 Prime': '57 × 30 × 31',
    'YM01 Neo': '57 × 30 × 31',
    'YM01 Pro': '57 × 30 × 31',
    'YM03 Chic': '62 × 34 × 35',
    'YM04 Male': '63 × 36 × 37',
    'YM06 Child': '54 × 32 × 31',
  };
  function showPhoto(container, model) {
    window.YimiProductPhotos.render(container, model.model, model.image);
  }
  function isPlainClick(event) {
    return event.button === 0 && !event.defaultPrevented && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey;
  }
  function chooseSeries(series, selectedModel) {
    const group = models.filter(model => model.appearanceSeries === series);
    if (!group.length) return;
    document.querySelectorAll('[data-series]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.series === series)));
    document.getElementById('series-prompt').hidden = true;
    document.getElementById('series-options').hidden = false;
    document.querySelectorAll('[data-model-series]').forEach(groupElement => {
      groupElement.hidden = groupElement.dataset.modelSeries !== series;
    });
    const initialModel = group.find(model => model.model === selectedModel) || group[0];
    showModel(initialModel.model, false);
  }
  document.querySelectorAll('[data-series]').forEach(button => button.addEventListener('click', () => chooseSeries(button.dataset.series)));
  function showModel(id, scroll = true) {
    const model = models.find(item => item.model === id);
    if (!model) return;
    const familySection = document.getElementById(model.form);
    familySection.after(panel);
    const backLink = panel.querySelector('.back-row a');
    backLink.href = '#' + model.form;
    backLink.textContent = model.form === 'fingertip' ? 'Back to fingertip models ↑' : 'Back to handheld models ↑';
    panel.hidden = false;
    document.querySelectorAll('[data-model], [data-review-model]').forEach(link => {
      if ((link.dataset.model || link.dataset.reviewModel) === model.model) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    title.textContent = model.model + ' ' + model.productFamily;
    document.getElementById('model-series').textContent = model.appearanceDetail || model.appearanceSeries || 'Handheld';
    showPhoto(photo, model);
    const specs = model.form === 'fingertip'
      ? [
        ['SpO₂', 'Range: 35–100%\nAccuracy: ±2% (70–100%)\nAccuracy unspecified at 35–69%'],
        ['Pulse rate', 'Range: 30–250 bpm\nAccuracy: ±3 bpm'],
        ['Intended users', model.targetUser === 'Child' ? 'Pediatric' : 'Adult'],
        ['Display', model.displayOptions || model.displaySize || model.displayType],
        ['Power supply', '2 × AAA 1.5 V alkaline batteries'],
        ['Dimensions & weight', (fingertipDimensions[model.appearanceSeries] ? 'Approx. ' + fingertipDimensions[model.appearanceSeries] + ' mm (L × W × H)' : 'Dimensions: to be confirmed') + '\nApprox. 35 g (excluding batteries)'],
        ['Bluetooth', values[model.bluetooth]],
        ['Buzzer', values[model.sound]],
      ]
      : [
        ['SpO₂', 'Range: 35–100%\nAccuracy: ±2% (70–100%)\nAccuracy unspecified below 70%\nResolution: 1%'],
        ['Pulse rate', 'Range: 30–250 bpm\nAccuracy: ±3 bpm\nResolution: 1 bpm'],
        ['Display', model.model === 'YH01' ? '3.5-inch LED' : '3.5-inch TFT'],
        ['Power & battery life', '4 × AA 1.5 V batteries\nApprox. ' + (model.model === 'YH01' ? '30' : '15') + ' hours*\nLow-battery indication'],
        ['Dimensions & weight', '70 × 150 × 30 mm (W × H × D)\n<500 g (fully configured, including batteries)'],
        ['Optional sensors', 'RS201: reusable adult finger sleeve\nRS202: reusable adult finger clip\nSS201: disposable adult/pediatric nasal alar clip'],
        ['Operating mode', 'Continuous operation'],
        ['Ingress protection', 'IPX2'],
      ];
    const specNote = document.getElementById('model-spec-note');
    specNote.hidden = model.form === 'fingertip';
    specNote.textContent = model.form === 'fingertip' ? '' : '*Battery life under typical configuration: fresh batteries, 25°C ambient temperature, continuous SpO₂ measurement, minimum backlight brightness and sound off.';
    rows.replaceChildren(...specs.map(([label, value]) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.scope = 'row';
      th.textContent = label;
      const td = document.createElement('td');
      td.textContent = value;
      tr.append(th, td);
      return tr;
    }));
    document.getElementById('model-inquiry').href = 'contact.html?' + new URLSearchParams({category:'pulse',sub:model.form,model:model.model});
    document.getElementById('documents-model').textContent = model.model;
    for (const type of ['manual', 'regulatory']) {
      document.getElementById('model-' + type).href = 'contact.html?' + new URLSearchParams({category:'pulse',sub:model.form,model:model.model,document:type});
    }
    document.getElementById('model-fda-reference').hidden = !['YM101', 'YM201', 'YM301'].includes(model.model);
    const fullPage = document.getElementById('model-full-page');
    const fullPageUrl = window.YimiModelPages[model.model];
    fullPage.hidden = !fullPageUrl;
    if (fullPageUrl) fullPage.href = fullPageUrl;
    else fullPage.removeAttribute('href');
    const url = new URL(location.href);
    url.searchParams.set('model', model.model);
    history.replaceState(null, '', url);
    if (scroll) {
      panel.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
      title.focus({preventScroll:true});
    }
  }
  document.querySelectorAll('[data-model], [data-review-model]').forEach(link => {
    link.addEventListener('click', event => {
      if (!isPlainClick(event)) return;
      event.preventDefault();
      showModel(link.dataset.model || link.dataset.reviewModel);
    });
  });
  document.getElementById('series-prompt').hidden = false;
  document.getElementById('series-options').hidden = true;
  const selected = models.find(model => model.model === new URLSearchParams(location.search).get('model'));
  if (selected) {
    if (selected.form === 'fingertip') chooseSeries(selected.appearanceSeries, selected.model);
    else showModel(selected.model, false);
  }
})();
