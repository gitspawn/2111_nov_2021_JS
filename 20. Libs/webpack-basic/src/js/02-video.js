import Player from "@vimeo/player";
import lodash from "lodash";

// console.log(Player);

// console.log(lodash);

const STORAGE_KEY = "video-player-current-time";

let iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("play", lodash.throttle(playerCurrentTime, 1000));
player.on("ended", getEndedVideoTime);
setVideoTime();

function playerCurrentTime(data) {
    const dataJson = JSON.stringify(data);
    if (data.percent > 0.99) {
        player.off("timeupdate");
    }
    localStorage.setItem(STORAGE_KEY, dataJson);
}

function getEndedVideoTime() {
    localStorage.removeItem(STORAGE_KEY);
}

function setVideoTime() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime) {
        const parsedJSON = JSON.parse(savedTime);
        player.setCurrentTime(parsedJSON.seconds);
    }
}
