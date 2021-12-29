/**
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event)
 * Mouse coordinates: https://nerdparadise.com/programming/javascriptmouseposition
 */

//  <div class="box js-box">
//  <div class="inner-box"></div>
// </div>

let boxRef = document.querySelector(".js-box");
let innerBoxRef = document.querySelector(".inner-box");

// boxRef.addEventListener("mouseenter", (event) => {
//     console.log("mouseenter");
// });

// boxRef.addEventListener("mouseleave", (event) => {
//     console.log("mouseleave");
// });

// boxRef.addEventListener("mouseover", (event) => {
//     console.log("mouseover");
// });

// boxRef.addEventListener("mouseout", (event) => {
//     console.log("mouseout");
// });

// boxRef.addEventListener("mousemove", (event) => {
//     console.log("mousemove");
// });

//============================
// Hover
boxRef.addEventListener("mouseenter", (event) => {
    event.target.classList.add("box--active");
});

boxRef.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("box--active");
});
