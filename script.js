
// .............loader script

addEventListener('DOMContentLoaded',() => {

    setTimeout(() => {
        hideLoader();
        showBody();
    }, 2000)

    function hideLoader(){
        const loader = document.querySelector('.loader');
        loader.style.display = "none";
    }
    function showBody(){
        const bodyContent = document.querySelector('.body-content');
        bodyContent.style.display = "block";    }
})





// ......................................................


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // else{
        //     entry.target.classList.remove('show');
        // }
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
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(80, 124, 158, ${1.1*ratio}), rgba(80, 124, 158, ${1.1*ratio})), url(../images/main-background.png)` ;
    }

    else if(ratio>2){
        document.body.style.backgroundImage = `url(images/main-background.png)`;
    }
})



