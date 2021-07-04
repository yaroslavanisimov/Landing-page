// const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
// const smothScrollElems = document.querySelectorAll('.scroll'); 
const SPEED =0.5;
const scrolled = event => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('[href^="#"]')) {
        const pageY = window.pageYOffset;
        // const hash = target.href.replace(/[^#]*(.*)/,'$1') - regular syntax
        const hash = target.getAttribute ('href');

        if (hash === "#") return 

        const elem = document.querySelector(hash);  
        // - sections were we are need to scroll
        const coordinateElem = elem.getBoundingClientrect().top;
        // - coordination were the elements are
        let start =0;
        // - every click href change animation by requestAnimationFrame
        const step = time => {
            if (!start) start = time;
            const progress = time - start;
            const r = (coordinateElem < 0 ? 
                Math.max(pageY - progress/ SPEED, pageY + coordinateElem):
                Math.min(pageY + progress/ SPEED, pageY + coordinateElem))
            window.scrollTo(0, r);
            if (r<pageY + coordinateElem) requestAnimationFrame(step); 
        // -depends on scroll up or down , negative or posiitve value; Math.max - will take maximum value
        }
        requestAnimationFrame(step) 
    }
}

document.body.addEventListener('click', scrolled);


// smothScrollElems.forEach(link => {
//     link.addEventListener('click',(event) => {
//         event.preventDefault()
//         const id = link.getAttribute('href').substring(1)
//         document.getElementById(id).scrollintoView({
//             bahavior:'smooth'
//         });
//     })
// })