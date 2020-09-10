let money = 0;
let fish = 0;
let fishFetcher = 0;

// Fish borrowed from https://codepen.io/Astrak/pen/MYVZVo

// TODO: Maybe as the number of fish increases, we can have svg fish swim by
const handlePageLoad = () => {
    initializeElements();
    setFishAnimation();
    setInterval(changeButtonText, 1000);
}

const changeButtonText = () => {
    money = money += 1;
    fish = fish += (fishFetcher * 2);

    moneyContainer.innerHTML = `$${money}`;
    fishAmountContainer.innerHTML = fish;
}

const setFishAnimation = () => {
    const fs = document.getElementById('fish-transform');
    fs.setAttribute('values', `-50 50;-50 -20;150 0;${document.documentElement.clientWidth} -20`)
}