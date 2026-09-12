(() => {
  const models = JSON.parse(document.getElementById('pulse-model-data').textContent);
  const panel = document.getElementById('model-detail');
  const title = document.getElementById('model-title');
  const photo = document.getElementById('model-photo');
  const rows = document.getElementById('model-specs');
  const values = {No: 'Not included', Yes: 'Included', Optional: 'Optional', TBD: 'To be confirmed'};
  // Source: 产品参数.xlsx, 指夹血氧仪!B13:B17; Lite matches YM01 per user confirmation.
  const fingertipDimensions = {
    'YM01 Prime': '57 × 30 × 31',
    'YM01 Neo': '57 × 30 × 31',
    'YM01C Lite': '57 × 30 × 31',
    'YM02 Pro': '57 × 30 × 31',
    'YM03 Chic': '62 × 34 × 35',
    'YM04 Male': '63 × 36 × 37',
    'YM06 Child': '54 × 32 × 31',
  };
  function showPhoto(container, model) {
    container.replaceChildren();
    const element = document.createElement(model.image ? 'img' : 'span');
    if (model.image) {
      element.src = model.image;
      element.alt = model.model + ' product image';
    } else {
      element.textContent = '[' + model.model + ' 产品图待补]';
    }
    container.append(element);
  }
  function chooseSeries(series) {
    const group = models.filter(model => model.appearanceSeries === series);
    if (!group.length) return;
    document.querySelectorAll('[data-series]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.series === series)));
    document.getElementById('series-prompt').hidden = true;
    document.getElementById('series-options').hidden = false;
    document.getElementById('series-title').textContent = series.split(' ').pop() + ' models';
    document.getElementById('series-models').replaceChildren(...group.map(model => {
      const button = document.createElement('button');
      button.className = 'model-option';
      button.dataset.model = model.model;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-controls', 'model-detail');
      const name = document.createElement('span');
      name.textContent = model.model;
      const display = document.createElement('small');
      display.textContent = model.displayType;
      button.append(name, display);
      button.addEventListener('click', () => showModel(model.model));
      return button;
    }));
    panel.hidden = true;
    const url = new URL(location.href);
    url.searchParams.delete('model');
    history.replaceState(null, '', url);
  }
  document.querySelectorAll('[data-series]').forEach(button => button.addEventListener('click', () => chooseSeries(button.dataset.series)));
  function showModel(id, scroll = true) {
    const model = models.find(item => item.model === id);
    if (!model) return;
    panel.hidden = false;
    document.querySelectorAll('[data-model]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.model === model.model)));
    title.textContent = model.model + ' ' + model.productFamily;
    document.getElementById('model-series').textContent = model.appearanceSeries || 'Handheld / 手持式';
    showPhoto(photo, model);
    const specs = model.form === 'fingertip'
      ? [
        ['SpO₂', 'Range: 35–100%\nAccuracy: ±2% (70–100%)\nAccuracy unspecified at 35–69%'],
        ['Pulse rate', 'Range: 30–250 bpm\nAccuracy: ±3 bpm'],
        ['Intended users', model.targetUser === 'Child' ? 'Pediatric' : 'Adult'],
        ['Display', model.displaySize?.includes('inch') ? model.displaySize : model.displayType],
        ['Power supply', '2 × AAA 1.5 V alkaline batteries'],
        ['Dimensions & weight', (fingertipDimensions[model.appearanceSeries] ? 'Approx. ' + fingertipDimensions[model.appearanceSeries] + ' mm (L × W × H)' : 'Dimensions: to be confirmed') + '\nApprox. 35 g (excluding batteries)'],
        ['Bluetooth', values[model.bluetooth]],
        ['Sound & voice', 'Sound: ' + values[model.sound] + '\nVoice: ' + values[model.voice]],
      ]
      : [['Model', model.model], ['Product form', 'Handheld'], ['Display', '[对应型号资料待补]'], ['Probe & accessories', '[对应型号资料待补]'], ['Power supply', '[对应型号资料待补]']];
    const specNote = document.getElementById('model-spec-note');
    specNote.hidden = model.form === 'fingertip';
    specNote.textContent = model.form === 'fingertip' ? '' : '[测量参数、尺寸、探头配置和对应型号文件待补；选项按具体项目确认]';
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
    const url = new URL(location.href);
    url.searchParams.set('model', model.model);
    history.replaceState(null, '', url);
    if (scroll) {
      panel.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
      title.focus({preventScroll:true});
    }
  }
  document.querySelectorAll('[data-review-model]').forEach(button => {
    button.addEventListener('click', () => {
      showModel(button.dataset.reviewModel);
    });
  });
  const selected = models.find(model => model.model === new URLSearchParams(location.search).get('model'));
  if (selected) {
    if (selected.form === 'fingertip') chooseSeries(selected.appearanceSeries);
    showModel(selected.model, false);
  }
})();
