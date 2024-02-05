
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




// ..............Scroll Color Change Js

let scrolling = false;

window.addEventListener('scroll', () =>{
    scrolling = true;
});


setInterval(() => {
    if(scrolling){
        scrolling = false;
        colorTransition();
    }
}, 40);

function colorTransition(){
    const home = document.querySelector('#home');
    const bodyContent = document.querySelector('#bodyContent');
    const homeHeight = home.clientHeight;
    let ratio = home.scrollTop / homeHeight ;
    if(ratio<=2){
        document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${1.1*ratio}), rgba(107, 166, 210, ${1.1*ratio})), url(/images/main-background.webp)` ;
    }
    else if(ratio>2){
        document.body.style.backgroundImage = `rgb(107, 166, 210)`;
    }
}

//  .................New Color Transition for About Us

const aboutUs = document.querySelector('#aboutUs')
const colorTransitionThresholds = [];

for(let i=0; i<=1; i+=0.01)
{
    colorTransitionThresholds.push(i);
}

let previousRatio = 0
let colorOpacity = 0
const colorTransitionObersver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let scrollDirection = entry.intersectionRatio - previousRatio
        if(entry.isIntersecting && scrollDirection > 0){
            colorOpacity = 1.1*entry.intersectionRatio
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${colorOpacity}), rgba(107, 166, 210, ${colorOpacity})), url(/images/main-background.webp)` ;
            console.log('increasing')
        }
        if(entry.isIntersecting && scrollDirection < 0){
            document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, 1), rgba(107, 166, 210, 1))`;
            console.log('decreasing')
        }
        previousRatio = entry.intersectionRatio;
        console.log(previousRatio)
    })
},{threshold:colorTransitionThresholds})

colorTransitionObersver.observe(aboutUs)


// ...........Events Animation Js

const eventImage = document.querySelectorAll('.event-image');
const eventText = document.querySelectorAll('.event-text');

eventImage.forEach((el) => {
    el.addEventListener('click', (e) =>{
        console.log(e);
        el.style.opacity = "0";
        console.log(el);
        const targText = el.nextElementSibling;  
        console.log(targText);
        targText.style.opacity = "1";
        targText.style.zIndex  = "100";
    });
});
eventText.forEach((el) => {
    el.addEventListener('click', (e) =>{
        console.log(e);
        console.log(el);
        el.style.opacity = "0";
        el.style.zIndex  = "-1";
        const targImage = el.previousElementSibling; 
        targImage.style.opacity = "1";
    });
});



// ......Implementations Scroll JS


const rightScroll = document.querySelector('.rightScroll');
const leftScroll = document.querySelector('.leftScroll');

const slides = document.querySelectorAll('.impBox');

rightScroll.addEventListener('click', () => {
    let count = 0;
    slides.forEach((slide) => {
        if(isInViewport(slide) && count === 0){
            console.log("hi");
            console.log(slide.nextElementSibling);
            slide.nextElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block:"center"});
            count += 1;
            console.log(count)
        }
    })
})
leftScroll.addEventListener('click', () => {
    let count = 0;
    console.log(count);
    console.log(slides);
        slides.forEach((slide) => {
            console.log(isInViewport(slide))
        if(isInViewport(slide) && count === 0){
            slide.previousElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block: 'center'});
            count += 1;
            console.log(count);
        }
    })
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// ........Scale on Scroll Animations


const thresholds = [];

for(let i=0; i<=1; i+=0.01)
{
    thresholds.push(i);
}

const ScaleElements = function ScaleElement(entries){
    entries.forEach((element) => {
        if(element.isIntersecting){
            element.target.style.transform = `translateX(${350*(1-element.intersectionRatio)*(1-element.intersectionRatio)*(1-element.intersectionRatio)}px)`;
        }
    });
};

const ScaleObserver = new IntersectionObserver(ScaleElements, {threshold: thresholds})

const AllElements = document.querySelectorAll('.right-flow-animate');

AllElements.forEach((element) => {
    ScaleObserver.observe(element);
})
