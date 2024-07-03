const nav=document.querySelection('nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY>100){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover',(e)=>{
    if(e.target.tagName=='A'){
        e.target.style.color='#ccc';
    }
});

nav.addEventListener('mouseout',(e)=>{
    if(e.target.tagName=='A'){
        e.target.style.color='#fff'
    }
});
