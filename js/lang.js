let currentLang = localStorage.getItem('lang') || 'en';
function setLang(lang){
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en][data-zh]').forEach(el=>{
        el.textContent = el.dataset[lang];
    });
    document.getElementById('langBtn').textContent = lang === 'en' ? '中' : 'EN';
}
document.getElementById('langBtn').addEventListener('click', ()=>{
    setLang(currentLang === 'en' ? 'zh' : 'en');
});
setLang(currentLang);