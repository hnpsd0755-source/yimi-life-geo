if (location.pathname.endsWith('/detail.html') && new URLSearchParams(location.search).get('type') === 'rapid') {
  location.replace('category.html?filter=rapid#models');
}
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-contact],[data-pending]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();if(b.hasAttribute('data-contact')){const u=new URL('contact.html',location.href);if(location.pathname.includes('category')||location.pathname.includes('detail')){u.searchParams.set('category','thermometer');const t=new URLSearchParams(location.search);const k=t.get('type')||t.get('filter')||null;if(['forehead','patch'].includes(k))u.searchParams.set('sub',k)}if(location.pathname.includes('contact')){document.querySelector('#project-form')?.scrollIntoView();return}location.href=u.href;return}const pending=b.dataset.pending;const destination={'About 公司介绍页':'about.html','About 研发内容':'about.html#research','Manufacturing & Quality':'manufacturing.html','OEM/ODM 页面':'oem.html'}[pending];if(destination){location.href=destination;return}dialog.querySelector('h2').textContent=pending?'Page information':'Project inquiry preview';dialog.querySelector('.context').textContent=pending?'Requested page: '+pending+'. This page is not available in the review preview.':'Current selection: '+(document.querySelector('.selected-type')?.textContent|| (location.pathname.includes('category')?'Temperature monitoring':'Product project'))+'.';dialog.querySelector('.dialog-description').textContent=pending?'Contact our team for information about this topic.':'This review preview does not send inquiries. Use the Contact page to prepare your project requirements.';dialog.showModal()}));document.querySelectorAll('.close,.close-dialog').forEach(b=>b.onclick=()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});const names={forehead:'Forehead thermometers',patch:'Temperature patches',rapid:'Rapid thermometers'};
const params=new URLSearchParams(location.search);
const type=params.get('type');
const filters=[...document.querySelectorAll('[data-filter]')];
function filter(key){
  if(!Object.hasOwn(names,key)&&key!=='all')key='all';
  filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===key)));
  document.querySelectorAll('.model-card').forEach(card=>card.hidden=key!=='all'&&card.dataset.type!==key);
  document.querySelector('#catalog-title').textContent=key==='all'?'Explore the range.':names[key];
  document.querySelector('#catalog-status').textContent=key==='all'?'Forehead thermometers · Temperature patches · Rapid thermometers (future product)':key==='rapid'?'Future product · Model details not yet available':'Discuss model specifications and documentation with our team.';
  const url=new URL(location.href);url.searchParams.set('filter',key);history.replaceState(null,'',url);
}
filters.forEach(button=>button.onclick=()=>filter(button.dataset.filter));
if(filters.length&&params.has('filter'))filter(params.get('filter'));
if(document.getElementById('temperature-title')&&['forehead','patch'].includes(type)){
  const name=type==='forehead'?'Forehead Thermometers':'Temperature Patches';
  const summary=type==='forehead'?'Discuss infrared forehead thermometer models for your product portfolio. Share your target market, measurement and configuration requirements.':'Discuss wearable temperature patch models for your product portfolio. Share your target market, monitoring and configuration requirements.';
  document.title=name+' for OEM & ODM Projects | YimiLife';
  document.querySelector('meta[name="description"]').content=summary;
  document.getElementById('temperature-title').textContent=name;
  document.getElementById('temperature-summary').textContent=summary;
  document.getElementById('temperature-image-label').textContent=name;
  document.querySelectorAll('.selected-type').forEach(element=>element.textContent=name);
  document.querySelectorAll('[data-temperature-inquiry], [data-temperature-document]').forEach(link=>{
    const query=new URLSearchParams({category:'thermometer',sub:type});
    if(link.dataset.temperatureDocument)query.set('document',link.dataset.temperatureDocument);
    link.href='contact.html?'+query;
  });
  document.getElementById('temperature-back').href='category.html?filter='+type+'#models';
  document.querySelectorAll('.temperature-types a').forEach(link=>{
    if(new URL(link.href).searchParams.get('type')===type)link.setAttribute('aria-current','page');
  });
}
document.querySelectorAll('[data-image]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-image]').forEach(x=>x.setAttribute('aria-pressed',x===b));document.querySelector('#gallery-main span').textContent='['+b.dataset.image+']'});
