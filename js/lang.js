let currentLang=localStorage.getItem('preferredLang')||'en';
function updateLanguage(lang){
    document.getElementById('langBtn').textContent=lang==='en'?'中':'En';
    document.querySelectorAll('[data-en]').forEach(element=>{
        element.textContent=element.getAttribute(lang==='en'?'data-en':'data-zh');
    });
    const title=document.querySelector('title');
    title.textContent=title.getAttribute(lang==='en'?'data-en':'data-zh');
}
document.addEventListener('DOMContentLoaded',function(){
    updateLanguage(currentLang);
    document.getElementById('langBtn').addEventListener('click',function(){
        currentLang=currentLang==='en'?'zh':'en';
        localStorage.setItem('preferredLang',currentLang);
        updateLanguage(currentLang);
    });
});