const navbar= document.querySelector('.navbar');
const burger= document.querySelector('.burger');
const leftNav= document.querySelector('.left-nav');
const navList= document.querySelectorAll('.nav-list');
const rightNav= document.querySelector('.right-nav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-resp');
    leftNav.classList.toggle('v-hidden');
    navList.forEach(item => item.classList.toggle('v-hidden'));
    rightNav.classList.toggle('v-hidden');
})
