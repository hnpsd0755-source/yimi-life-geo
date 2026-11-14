(() => {
  window.YimiModelPages = Object.freeze({
    YM201: 'ym201-fingertip-pulse-oximeter.html',
    YM212: 'ym212-fingertip-pulse-oximeter.html',
    YH02: 'yh02-handheld-pulse-oximeter.html',
    YP7202: 'yp7202-blood-pressure-monitor.html',
  });
  const gallery = document.querySelector('[data-gallery-model]');
  if (gallery && window.YimiProductPhotos) {
    window.YimiProductPhotos.render(gallery, gallery.dataset.galleryModel);
  }
})();
