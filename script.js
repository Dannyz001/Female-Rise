const hamburger = document.querySelector('.hamburger');
const linkContainer = document.querySelector('.link-container');


hamburger.addEventListener('click', ()=> {
    linkContainer.classList.toggle('active');
});
