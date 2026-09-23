(() => {
  const photos = {"YH01":[{"src":"assets/products-20260922/YH01/yh01-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YH01/yh01-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YH01/yh01-top-v01.png","label":"Top view"},{"src":"assets/products-20260922/YH01/yh01-with-sensor-v01.png","label":"With sensor"}],"YH02":[{"src":"assets/products-20260922/YH02/yh02-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YH02/yh02-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YH02/yh02-top-v01.png","label":"Top view"},{"src":"assets/products-20260922/YH02/yh02-with-sensor-v01.png","label":"With sensor"}],"YM101":[{"src":"assets/products-20260922/YM101/ym101-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM101/ym101-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM101/ym101-top-v01.png","label":"Top view"}],"YM103":[{"src":"assets/products-20260922/YM103/ym103-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM103/ym103-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM103/ym103-top-v01.png","label":"Top view"}],"YM111":[{"src":"assets/products-20260922/YM111/ym111-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM111/ym111-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM111/ym111-top-v01.png","label":"Top view"}],"YM112":[{"src":"assets/products-20260922/YM112/ym112-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM112/ym112-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM112/ym112-top-v01.png","label":"Top view"}],"YM201":[{"src":"assets/products-20260922/YM201/ym201-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM201/ym201-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM201/ym201-top-v01.png","label":"Top view"}],"YM202":[{"src":"assets/products-20260922/YM202/ym202-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM202/ym202-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM202/ym202-top-v01.png","label":"Top view"}],"YM211":[{"src":"assets/products-20260922/YM211/ym211-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM211/ym211-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM211/ym211-top-v01.png","label":"Top view"}],"YM212":[{"src":"assets/products-20260922/YM212/ym212-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM212/ym212-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM212/ym212-top-v01.png","label":"Top view"}],"YM301":[{"src":"assets/products-20260922/YM301/ym301-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM301/ym301-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM301/ym301-top-v01.png","label":"Top view"}],"YM401":[{"src":"assets/products-20260922/YM401/ym401-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM401/ym401-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM401/ym401-side-2-v01.png","label":"Side view 2"},{"src":"assets/products-20260922/YM401/ym401-top-v01.png","label":"Top view"}],"YM403":[{"src":"assets/products-20260922/YM403/ym403-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM403/ym403-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM403/ym403-side-2-v01.png","label":"Side view 2"},{"src":"assets/products-20260922/YM403/ym403-top-v01.png","label":"Top view"}],"YM501":[{"src":"assets/products-20260922/YM501/ym501-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM501/ym501-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM501/ym501-side-2-v01.png","label":"Side view 2"},{"src":"assets/products-20260922/YM501/ym501-top-v01.png","label":"Top view"}],"YM601":[{"src":"assets/products-20260922/YM601/ym601-frog-main-v01.png","label":"Frog · Main view"},{"src":"assets/products-20260922/YM601/ym601-frog-side-v01.png","label":"Frog · Side view"},{"src":"assets/products-20260922/YM601/ym601-frog-top-v01.png","label":"Frog · Top view"},{"src":"assets/products-20260922/YM601/ym601-panda-main-v01.png","label":"Panda · Main view"},{"src":"assets/products-20260922/YM601/ym601-panda-side-v01.png","label":"Panda · Side view"},{"src":"assets/products-20260922/YM601/ym601-panda-side-2-v01.png","label":"Panda · Side view 2"},{"src":"assets/products-20260922/YM601/ym601-panda-top-v01.png","label":"Panda · Top view"}],"YM603":[{"src":"assets/products-20260922/YM603/ym603-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM603/ym603-side-v01.png","label":"Side view"}],"YP7101":[{"src":"assets/products-20260922/YP7101/yp7101-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7101/yp7101-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7101/yp7101-top-v01.png","label":"Top view"}],"YP7201":[{"src":"assets/products-20260922/YP7201/yp7201-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7201/yp7201-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7201/yp7201-top-v01.png","label":"Top view"}],"YP7202":[{"src":"assets/products-20260922/YP7202/yp7202-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7202/yp7202-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7202/yp7202-top-v01.png","label":"Top view"}]};
  function render(container, model, fallback) {
    const items = photos[model] || (fallback ? [{src: fallback, label: 'Product image'}] : []);
    container.replaceChildren();
    container.classList.toggle('has-product-gallery', items.length > 1);
    if (!items.length) {
      const pending = document.createElement('span');
      pending.textContent = '[' + model + ' 产品图待补]';
      container.append(pending);
      return;
    }
    const image = document.createElement('img');
    image.width = 800;
    image.height = 800;
    function select(item) {
      image.src = item.src;
      image.alt = model + ' — ' + item.label;
    }
    select(items[0]);
    if (items.length === 1) {
      container.append(image);
      return;
    }
    const stage = document.createElement('div');
    stage.className = 'product-photo-stage';
    stage.append(image);
    const controls = document.createElement('div');
    controls.className = 'product-photo-options';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', model + ' product views');
    const caption = document.createElement('p');
    caption.className = 'product-photo-caption';
    caption.setAttribute('aria-live', 'polite');
    caption.textContent = items[0].label;
    const buttons = items.map((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', model + ' — ' + item.label);
      button.setAttribute('aria-pressed', String(index === 0));
      button.title = item.label;
      const thumbnail = document.createElement('img');
      thumbnail.src = item.src;
      thumbnail.alt = '';
      thumbnail.width = 64;
      thumbnail.height = 64;
      button.append(thumbnail);
      button.addEventListener('click', () => {
        select(item);
        caption.textContent = item.label;
        buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      });
      return button;
    });
    controls.append(...buttons);
    container.append(stage, controls, caption);
  }
  window.YimiProductPhotos = {render};
})();
