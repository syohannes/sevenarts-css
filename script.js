document.querySelector(".menu-btn").addEventListener
('click', () => document.querySelector('.main-menu')
.classList.toggle('show'));
document.querySelector(".container").addEventListener
("click", () => document.querySelector('.main-menu')
.classList.remove('show'))

const nav = document.querySelector('.main-nav')
window.addEventListener('scroll', fixNav)
function fixNav(){
    if(window.scrollY > 0) {
        nav.classList.add('active')
    } else {
        nav.classList.remove("active")
    }
}
const body = document.querySelector('.night').addEventListener('click', nightMode)
function nightMode(){
    document.querySelector('body').style.backgroundColor="#262626";
    document.querySelector('body').style.color= 'white';
    document.querySelector('.main-nav').style.backgroundColor="#262626"
    document.querySelector('.footer').style.backgroundColor="#262626"
}
document.querySelector('.lovebtn').addEventListener
('click', ()=> document.querySelector('.lovebtn2')
.classList.toggle('red'));
document.querySelector('.lovebtn2').addEventListener
('click', ()=> document.querySelector('.lovebtn2')
.classList.add('red'));
