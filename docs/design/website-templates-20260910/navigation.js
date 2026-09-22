(() => {
  const nav = document.querySelector('.mainnav');
  const menu = document.querySelector('.menu-button');
  if (!nav || !menu) return;
  const dropdowns = [...nav.querySelectorAll('details.navdrop')];
  const closeDropdowns = () => dropdowns.forEach(item => { item.open = false; });
  const closeMenu = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    closeDropdowns();
  };
  menu.onclick = () => {
    const open = !nav.classList.contains('open');
    closeDropdowns();
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
  };
  dropdowns.forEach(item => {
    const summary = item.querySelector('summary');
    summary.setAttribute('aria-expanded', String(item.open));
    summary.addEventListener('click', () => {
      if (!item.open) dropdowns.filter(other => other !== item).forEach(other => { other.open = false; });
    });
    item.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', String(item.open));
    });
  });
  nav.querySelectorAll('a, button[data-contact]').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('pointerdown', event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const open = dropdowns.find(item => item.open);
    const mobileOpen = nav.classList.contains('open');
    closeMenu();
    if (mobileOpen) menu.focus();
    else if (open) open.querySelector('summary').focus();
  });
  nav.addEventListener('focusout', event => {
    if (!nav.contains(event.relatedTarget) && event.relatedTarget !== menu) closeDropdowns();
  });
  const updateActive = () => {
    const filename = location.pathname.split('/').pop();
    const aboutPage = ['about.html', 'news.html', 'blogs.html'].includes(filename);
    const research = filename === 'about.html' && ['#research', '#team', '#patents'].includes(location.hash);
    const productsPage = ['products.html', 'pulse.html', 'bp.html', 'category.html', 'detail.html'].includes(filename);
    nav.querySelector('.about-drop > summary')?.classList.toggle('is-active', aboutPage);
    nav.querySelector('.navdrop:not(.about-drop) > summary')?.classList.toggle('is-active', productsPage);
    nav.querySelectorAll('a').forEach(link => {
      const url = new URL(link.href);
      const same = url.pathname === location.pathname;
      const current = link.closest('.about-links')
        ? same && (url.hash === '#research' ? research : !research)
        : same && [...url.searchParams].every(([key, value]) => new URLSearchParams(location.search).get(key) === value) && (!url.hash || url.hash === location.hash);
      if (current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };
  updateActive();
  window.addEventListener('hashchange', updateActive);
  matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);
})();
