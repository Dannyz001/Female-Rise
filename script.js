const hamburger = document.querySelector('.hamburger');
const linkContainer = document.querySelector('.link-container');
const navBar = document.querySelector('.nav-bar')


hamburger.addEventListener('click', ()=> {
    linkContainer.classList.toggle('active');
    navBar.classList.toggle('fixed-nav')
});
