// _.debounce()
// _.throttle()

const lodash = _;

// window.addEventListener("scroll", (event) => {
//     // console.log(event);
//     console.log(scrollY);
//     console.log(scrollX);
// });

// function handleScroll() {
//     console.log(scrollY);
//     console.log(scrollX);
// }

// window.addEventListener("scroll", lodash.throttle(handleScroll, 5000));
// window.addEventListener("scroll", lodash.debounce(handleScroll, 3000));

function handleResize() {
    console.log(innerWidth);
}

// window.addEventListener("resize", lodash.throttle(handleResize, 2000));
window.addEventListener("resize", lodash.debounce(handleResize, 2000));
