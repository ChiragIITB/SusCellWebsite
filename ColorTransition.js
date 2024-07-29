

const home = document.body.querySelector('#home');
const thresholds = [];
for(let i=0; i<=1; i+=0.01)
{
    thresholds.push(i);
}

const newObserver = new IntersectionObserver((entry) =>{
    entry.forEach((value) => {
        const homeElement = document.getElementById('home');
        // const aboutElement = document.getElementById('aboutUs');
        homeElement.style.opacity = `${value.intersectionRatio}`;
    })

}, {threshold : thresholds})

newObserver.observe(home);

//  OLDER CODE FOR REFERENCE

// // ..............Scroll Color Change Js

// let scrolling = false;

// window.addEventListener('scroll', () =>{
//     scrolling = true;
// });


// setInterval(() => {
//     if(scrolling){
//         scrolling = false;
//         colorTransition();
//     }
// }, 40);

// function colorTransition(){
//     const home = document.querySelector('#home');
//     const bodyContent = document.querySelector('#bodyContent');
//     const homeHeight = home.clientHeight;
//     let ratio = home.scrollTop / homeHeight ;
//     if(ratio<=2){
//         document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${1.1*ratio}), rgba(107, 166, 210, ${1.1*ratio})), url(/images/main-background.webp)` ;
//     }
//     else if(ratio>2){
//         document.body.style.backgroundImage = `rgb(107, 166, 210)`;
//     }
// }



// //  .................New Color Transition for About Us

// const aboutUs = document.querySelector('#aboutUs')
// const colorTransitionThresholds = [];

// for(let i=0; i<=1; i+=0.01)
// {
//     colorTransitionThresholds.push(i);
// }

// let previousRatio = 0
// let colorOpacity = 0
// const colorTransitionObersver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         let scrollDirection = entry.intersectionRatio - previousRatio
//         if(entry.isIntersecting && scrollDirection > 0){
//             colorOpacity = 1.1*entry.intersectionRatio
//             document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${colorOpacity}), rgba(107, 166, 210, ${colorOpacity})), url(/images/main-background.webp)` ;
//             console.log('increasing')
//         }
//         if(entry.isIntersecting && scrollDirection < 0){
//             document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, 1), rgba(107, 166, 210, 1))`;
//             console.log('decreasing')
//         }
//         previousRatio = entry.intersectionRatio;
//         console.log(previousRatio)
//     })
// },{threshold:colorTransitionThresholds})

// colorTransitionObersver.observe(aboutUs)
