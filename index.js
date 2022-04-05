const button = document.querySelector("button");

const input = document.querySelector("input");

const rangeNum = document.querySelector("#range-number");

const orbit = document.querySelector("#orbit");

input.addEventListener('input', e => {
    rangeNum.innerHTML = e.target.value
});

button.addEventListener('click', () => {
    orbit.style.animationDuration = `${input.value}s`;
});