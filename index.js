const mobileNav = document.querySelector('.mobile-ham');
const showHam = document.querySelector('.menu-bar');
const modalClose = document.querySelector('.close');

mobileNav.addEventListener('click',function(){
mobileNav.classList.add('hidden');
showHam.classList.add('visible');
modalClose.classList.remove('hidden');
})

modalClose.addEventListener('click',function(){
    modalClose.classList.add('hidden');
    showHam.classList.remove('visible');
    mobileNav.classList.remove('hidden');

})