const animate = document.querySelectorAll('.content-box');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//  Hamburger js

const menuBtn = document.querySelector('.hamburger');
const menuContent = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');
});
