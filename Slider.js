

const rightScroll = document.querySelector('.rightScroll');
const leftScroll = document.querySelector('.leftScroll');

const slides = document.querySelectorAll('.impBox');


rightScroll.addEventListener('click', () => {
    let count = 0;
    slides.forEach((slide) => {
        if(isInViewport(slide) && count === 0){
            slide.nextElementSibling.scrollIntoView({behavior: "smooth", block:"nearest" ,inline:"center"});
            count += 1;
        }
    })
})
leftScroll.addEventListener('click', () => {
    let count = 0;
    slides.forEach((slide) => {
        if(isInViewport(slide) && count === 0){
            slide.previousElementSibling.scrollIntoView({behavior: "smooth", block: "nearest", inline:"center"});
            count += 1;
        }
    })
})



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
