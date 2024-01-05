

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




//......................Hamburger js



const menuBtn = document.querySelector('.hamburger');
const menuContent = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');
});




// ...................Blurring on scroll



const home = document.querySelector('#home');

const pageHeight = home.clientHeight;

console.log(pageHeight);

window.addEventListener('scroll', () => {
    let ratio = window.scrollY / pageHeight ;

    if(ratio<=2){
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(15, 33, 57, ${0.8*ratio}), rgba(15, 33, 57, ${0.8*ratio})), url(../images/main-background.png)` ;
    }

    else if(ratio>2){
        document.body.style.backgroundImage = `url(../images/main-background.png)`
    }
})




// ...............About Us Header Animate

const header = document.querySelectorAll('.headerAnimate-hide');


const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('headerAnimate-appear');
        }
    });
});

header.forEach((el) => headerObserver.observe(el));
