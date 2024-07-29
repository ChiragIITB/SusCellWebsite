
// .............loader script

// addEventListener('DOMContentLoaded',() => {

//     setTimeout(() => {
//         hideLoader();
//         showBody();
//     }, 2000)

//     function hideLoader(){
//         const loader = document.querySelector('.loader');
//         loader.style.display = "none";
//     }
//     function showBody(){
//         document.body.style.display = "block";    }
// })




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


// const rightScroll = document.querySelector('.rightScroll');
// const leftScroll = document.querySelector('.leftScroll');

// const slides = document.querySelectorAll('.impBox');

// rightScroll.addEventListener('click', () => {
//     let count = 0;
//     slides.forEach((slide) => {
//         if(isInViewport(slide) && count === 0){
//             console.log(slide.nextElementSibling);
//             slide.nextElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block:"center"});
//             count += 1;
//             console.log(`Count : ${count}`);
//         }
//     })
// })
// leftScroll.addEventListener('click', () => {
//     let count = 0;
//         slides.forEach((slide) => {
//         if(isInViewport(slide) && count === 0){
//             console.log(slide.previousElementSibling);
//             slide.previousElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block: 'center'});
//             count += 1;
//             console.log(`Count : ${count}`);
//         }
//     })
// })

// console.log(window.innerWidth)
// console.log(document.documentElement.clientWidth)

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.left >= 0 &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }



// ........Scale on Scroll Animations


// const thresholds = [];

// for(let i=0; i<=1; i+=0.01)
// {
//     thresholds.push(i);
// }

// const ScaleElements = function ScaleElement(entries){
//     entries.forEach((element) => {
//         if(element.isIntersecting){
//             element.target.style.transform = `translateX(${350*(1-element.intersectionRatio)*(1-element.intersectionRatio)*(1-element.intersectionRatio)}px)`;
//         }
//     });
// };

// const ScaleObserver = new IntersectionObserver(ScaleElements, {threshold: thresholds})

// const AllElements = document.querySelectorAll('.right-flow-animate');

// AllElements.forEach((element) => {
//     ScaleObserver.observe(element);
// })
