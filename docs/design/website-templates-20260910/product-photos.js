(() => {
  const photos = {"YH01":[{"src":"assets/products-20260922/YH01/yh01-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YH01/yh01-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YH01/yh01-top-v01.png","label":"Top view"},{"src":"assets/products-20260922/YH01/yh01-with-sensor-v01.png","label":"With sensor"}],"YH02":[{"src":"assets/products-20260922/YH02/yh02-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YH02/yh02-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YH02/yh02-top-v01.png","label":"Top view"},{"src":"assets/products-20260922/YH02/yh02-with-sensor-v01.png","label":"With sensor"}],"YM101":[{"src":"assets/products-20260922/YM101/ym101-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM101/ym101-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM101/ym101-top-v01.png","label":"Top view"}],"YM103":[{"src":"assets/products-20260922/YM103/ym103-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM103/ym103-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM103/ym103-top-v01.png","label":"Top view"}],"YM111":[{"src":"assets/products-20260922/YM111/ym111(red)-main-v01.png","label":"Red display · Main view"},{"src":"assets/products-20260922/YM111/ym111-side-v01.png","label":"Red display · Side view"},{"src":"assets/products-20260922/YM111/ym111-top-v01.png","label":"Red display · Top view"},{"src":"assets/products-20260922/YM111/ym111(color)-main-v01.png","label":"Color display · Main view"},{"src":"assets/products-20260922/YM111/YM111(color)-side-v01.png","label":"Color display · Side view"},{"src":"assets/products-20260922/YM111/YM111(color)-top-v01.png","label":"Color display · Top view"}],"YM112":[{"src":"assets/products-20260922/YM112/ym112-led-red-main-20261013-p1.webp","label":"Red LED · Main view"},{"src":"assets/products-20260922/YM112/ym112-led-color-main-20261013-p1.webp","label":"Color LED · Main view"}],"YM201":[{"src":"assets/products-20260922/YM201/ym201-oled-main-20261013-p1.webp","label":"OLED display · Main view"},{"src":"assets/products-20260922/YM201/ym201-oled-side-20261013-p1.webp","label":"OLED display · Side view"},{"src":"assets/products-20260922/YM201/ym201-oled-top-20261013-p1.webp","label":"OLED display · Top view"},{"src":"assets/products-20260922/YM201/ym201-tft-main-20261013-p1.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM201/ym201-tft-top-20261013-p1.webp","label":"TFT display · Top view"},{"src":"assets/products-20260922/YM201/ym201-back-20261013-p1.webp","label":"Battery compartment"}],"YM211":[{"src":"assets/products-20260922/YM211/ym211(OLED)-main-v01.png","label":"OLED display · Main view"},{"src":"assets/products-20260922/YM211/ym211(OLED)-side-v01.png","label":"OLED display · Side view"},{"src":"assets/products-20260922/YM211/ym211(OLED)-top-v01.png","label":"OLED display · Top view"},{"src":"assets/products-20260922/YM211/ym211(TFT)-main-v01.png","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM211/ym211(TFT)-side-v01.png","label":"TFT display · Side view"},{"src":"assets/products-20260922/YM211/ym211(TFT)-top-v01.png.png","label":"TFT display · Top view"},{"src":"assets/products-20260922/YM211/ym211-back-v01.webp","label":"Battery compartment"}],"YM212":[{"src":"assets/products-20260922/YM212/ym212-oled-main-20261013-p1.webp","label":"OLED display · Main view"},{"src":"assets/products-20260922/YM212/ym212-oled-side-20261013-p1.webp","label":"OLED display · Side view"},{"src":"assets/products-20260922/YM212/ym212-oled-top-20261013-p1.webp","label":"OLED display · Top view"},{"src":"assets/products-20260922/YM212/ym212-tft-main-20261013-p1.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM212/ym212-tft-top-20261013-p1.webp","label":"TFT display · Top view"}],"YM301":[{"src":"assets/products-20260922/YM301/ym301-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM301/ym301-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM301/ym301-top-v01.png","label":"Top view"}],"YM401":[{"src":"assets/products-20260922/YM401/ym401-main-v01.webp","label":"OLED display · Main view"},{"src":"assets/products-20260922/YM401/ym401-top-v01.webp","label":"OLED display · Top view"},{"src":"assets/products-20260922/YM401/ym401-TFT-main-v01.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM401/ym401-TFT-top-v01.webp","label":"TFT display · Top view"}],"YM403":[{"src":"assets/products-20260922/YM403/ym403-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YM403/ym403-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YM403/ym403-side-2-v01.png","label":"Side view 2"},{"src":"assets/products-20260922/YM403/ym403-top-v01.png","label":"Top view"}],"YM501":[{"src":"assets/products-20260922/YM501/ym501-OELD-main-v01.webp","label":"OLED display · Main view"},{"src":"assets/products-20260922/YM501/ym501-OELD-top-v01.webp","label":"OLED display · Top view"},{"src":"assets/products-20260922/YM501/ym501-TFT-main-v01.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM501/ym501-TFT-top-v01.webp","label":"TFT display · Top view"}],"YM603":[{"src":"assets/products-20260922/YM603/ym603-elephant-main-20261013-p1.webp","label":"Elephant · Main view"},{"src":"assets/products-20260922/YM603/ym603-elephant-side-20261013-p1.webp","label":"Elephant · Side view"},{"src":"assets/products-20260922/YM603/ym603-frog-main-20261013-p1.webp","label":"Frog · Main view"},{"src":"assets/products-20260922/YM603/ym603-frog-top-20261013-p1.webp","label":"Frog · Top view"},{"src":"assets/products-20260922/YM603/ym603-panda-main-20261013-p1.webp","label":"Panda · Main view"},{"src":"assets/products-20260922/YM603/ym603-panda-top-20261013-p1.webp","label":"Panda · Top view"}],"YP7101":[{"src":"assets/products-20260922/YP7101/yp7101-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7101/yp7101-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7101/yp7101-top-v01.png","label":"Top view"}],"YP7201":[{"src":"assets/products-20260922/YP7201/yp7201-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7201/yp7201-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7201/yp7201-top-v01.png","label":"Top view"}],"YP7202":[{"src":"assets/products-20260922/YP7202/yp7202-main-v01.png","label":"Main view"},{"src":"assets/products-20260922/YP7202/yp7202-side-v01.png","label":"Side view"},{"src":"assets/products-20260922/YP7202/yp7202-top-v01.png","label":"Top view"}],"YM503":[{"src":"assets/products-20260922/YM503/ym503-main-v01.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM503/ym503-side-v01.webp","label":"TFT display · Side view"},{"src":"assets/products-20260922/YM503/ym503-side-2-v01.webp","label":"TFT display · Alternate side view"},{"src":"assets/products-20260922/YM503/ym503-top-v01.webp","label":"TFT display · Top view"}],"YM302":[{"src":"assets/products-20260922/YM302/ym302-main-v01.webp","label":"TFT display · Main view"},{"src":"assets/products-20260922/YM302/ym302-side-v01.webp","label":"TFT display · Side view"},{"src":"assets/products-20260922/YM302/ym302-top-v01.webp","label":"TFT display · Top view"},{"src":"assets/products-20260922/YM302/ym302-back-v01.webp","label":"Battery compartment"}]};
  function render(container, model, fallback) {
    const items = photos[model] || (fallback ? [{src: fallback, label: 'Product image'}] : []);
    container.replaceChildren();
    container.classList.toggle('has-product-gallery', items.length > 1);
    if (!items.length) {
      const pending = document.createElement('span');
      pending.textContent = '[' + model + ' product image to follow]';
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
