document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.querySelector('.nav'),links=document.querySelector('.links'),btn=document.getElementById('menuBtn'),toTop=document.getElementById('toTop');
btn.onclick=()=>{const o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'✕':'☰'};
links.querySelectorAll('a').forEach(a=>a.onclick=()=>{links.classList.remove('open');btn.textContent='☰'});
toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>20);toTop.classList.toggle('show',scrollY>600)},{passive:true});
document.querySelectorAll('.card,.faq details,.project,.step,.expItem,.proofitem,.center,.expIntro').forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=(i%3)*80+'ms';io.observe(e)});
const secs=[...links.querySelectorAll('a')].map(a=>({a,s:document.querySelector(a.getAttribute('href'))})).filter(x=>x.s);
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)secs.forEach(x=>x.a.classList.toggle('active',x.s===e.target))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(x=>so.observe(x.s));
const tb=document.getElementById('themeBtn'),root=document.documentElement;function setTheme(t){root.dataset.theme=t;tb.textContent=t==='dark'?'☀️':'🌙';try{localStorage.setItem('theme',t)}catch(e){}}setTheme((()=>{try{return localStorage.getItem('theme')}catch(e){}})()||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));tb.onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');
const hv=document.querySelector('.hero');hv.addEventListener('mousemove',e=>{const r=hv.getBoundingClientRect();hv.style.setProperty('--mx',(e.clientX-r.left)+'px');hv.style.setProperty('--my',(e.clientY-r.top)+'px')});

document.getElementById('inq').addEventListener('submit',e=>{e.preventDefault();const f=e.target,m='Hello Rudy, my name is '+f.n.value+'. I need help with: '+f.s.value+'.'+(f.d.value?'\n'+f.d.value:'');window.open('https://wa.me/6281388613544?text='+encodeURIComponent(m),'_blank','noopener')});
