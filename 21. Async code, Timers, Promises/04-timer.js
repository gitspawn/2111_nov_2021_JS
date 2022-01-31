// let promotion = new Date("January 31, 2022 19:39:00");
// console.log(promotion);

// let pRef = document.querySelector("p");

// let promitionTimerId = setInterval(() => {
//     let dist = promotion - Date.now();

//     let days = Math.floor(dist / 1000 / 60 / 60 / 24);
//     let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((dist % (1000 * 60)) / 1000);

//     // console.log(days);
//     // console.log(hours);
//     // console.log(
//     //     `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
//     // );

//     pRef.innerText = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

//     if (dist < 0) {
//         clearInterval(promitionTimerId);
//         pRef.innerText = "Акция закончилась";
//     }
// }, 1000);

//========================================
function setPromotion(promotionDate) {
    let pRef = document.querySelector("p");

    let promitionTimerId = setInterval(() => {
        let dist = promotionDate - Date.now();

        let days = Math.floor(dist / 1000 / 60 / 60 / 24);
        let hours = Math.floor(
            (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dist % (1000 * 60)) / 1000);

        pRef.innerText = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

        if (dist < 0) {
            clearInterval(promitionTimerId);
            pRef.innerText = "Акция закончилась";
        }
    }, 1000);
}

let promotion = new Date("January 31, 2022 20:00:00");
setPromotion(promotion);
