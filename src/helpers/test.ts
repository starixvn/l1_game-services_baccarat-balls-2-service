import { getRandomNumberFromArray } from "sc-number-game-base/dist/helpers";

const balls = [...Array(76).keys()].slice(1);

const counts = new Array(75).fill(0);

for (let i = 0; i < 1000000; i++) {
    let ball = getRandomNumberFromArray(1, balls);
    counts[ball - 1]++;
}

const result = counts.map((count) => count / 10000);
console.log(result);
