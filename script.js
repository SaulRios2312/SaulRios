// script.js
// 1) Click en botón cambiante - añade clase clicked por 700ms
document.addEventListener('click', function(e){
  if(e.target.classList.contains('btn-cambio')){
    e.target.classList.add('clicked');
    setTimeout(()=>e.target.classList.remove('clicked'),700);
  }
});

// 2) Scroll reveal: cuando .post entra en viewport, añadir clase .visible
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.15});

document.querySelectorAll('.post').forEach(p=>observer.observe(p));
