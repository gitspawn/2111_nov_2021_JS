/*
 * Mousemove
 */

// _.debounce()
// _.throttle()

let mouseRef = document.querySelector(".js-coords");
console.log(mouseRef);

function handleMouseMove(event) {
    console.log(`X: ${event.screenX} Y: ${event.screenY}`);
    // console.log(event.target);

    let paragraph = event.target;
    paragraph.style.backgroundColor = `rgb(50, ${event.screenY}, ${event.screenX})`;
}

mouseRef.addEventListener("mousemove", _.throttle(handleMouseMove, 300));
// mouseRef.addEventListener("mousemove", _.debounce(handleMouseMove, 500));
