document.documentElement.classList.add('js');
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Schließen':'Menü'});
nav?.addEventListener('click',e=>{if(e.target.closest('a')){menu?.setAttribute('aria-expanded','false');nav.classList.remove('open');if(menu)menu.textContent='Menü'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menü';menu.focus()}});
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('seen');observer.unobserve(e.target)}},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const progress=document.querySelector('.progress');let scheduled=false;window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{const total=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(total>0?scrollY/total*100:0)+'%';scheduled=false})}},{passive:true});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));document.querySelectorAll('.gallery [data-category]').forEach(el=>el.hidden=b.dataset.filter!=='all'&&el.dataset.category!==b.dataset.filter)}));
const lightbox=document.querySelector('.lightbox');
document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.dataset.image;lightbox.querySelector('img').alt=b.dataset.caption;lightbox.querySelector('#photo-title').textContent=b.dataset.caption;lightbox.showModal()}));
document.querySelector('.close-photo')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close()}});
const form=document.querySelector('#contact-form');
if(form){
  const params=new URLSearchParams(location.search),topic=form.elements.thema,message=form.elements.nachricht;
  const options=Array.from(topic.options).map(option=>option.value);
  const requested=params.get('leistung')||params.get('maschine')||params.get('thema');
  const privateTopics=["Zäune & Tore","Geländer & Handläufe","Kamine aus Metall","Metallelemente für Haus & Garten","Sonderanfertigung nach Skizze"];
  let generated='';
  const updateDraft=()=>{
    const next=topic.value==='Allgemeine Anfrage'?'':(params.get('maschine')===topic.value?'Ich interessiere mich für die Fertigung mit '+topic.value+'.':'Ich interessiere mich für '+topic.value+'.')+'\n\n';
    if(!message.value||message.value===generated)message.value=next;
    generated=next;
    if(privateTopics.includes(topic.value)&&!form.elements.kundentyp.value)form.elements.kundentyp.value='Privatkunde';
  };
  if(requested&&options.includes(requested))topic.value=requested;
  updateDraft();
  topic.addEventListener('change',updateDraft);
  form.addEventListener('reset',()=>setTimeout(()=>{generated='';updateDraft()},0));
  form.addEventListener('submit',e=>{
    e.preventDefault();const data=new FormData(form);
    const body='Thema: '+data.get('thema')+'\nAnfrage als: '+(data.get('kundentyp')||'Nicht angegeben')+'\nName: '+data.get('vorname')+' '+data.get('nachname')+'\nE-Mail: '+data.get('email')+'\nTelefon: '+data.get('telefon')+'\n\n'+data.get('nachricht');
    location.href='mailto:info@s-m-technik.de?subject='+encodeURIComponent('Anfrage: '+data.get('thema')+' | SMTechnik')+'&body='+encodeURIComponent(body);
    document.querySelector('#form-status').textContent='Der E-Mail-Entwurf wurde angefordert. Falls sich kein E-Mail-Programm öffnet, schreiben Sie bitte direkt an info@s-m-technik.de.';
  });
}

document.querySelectorAll('.service-accordion').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.service-accordion').forEach(other=>{if(other!==detail)other.open=false})}));
