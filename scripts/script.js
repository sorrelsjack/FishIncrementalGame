let fish = 0;
let fishFetcher = 0;

// Fish borrowed from https://codepen.io/Astrak/pen/MYVZVo
// Hmmmm. Can we do away with money and make fish the currency? We can be breeding fish and then we can trade those fish for filters and supplies to better water quality and increase number of fish
// Different types of fish maybe?

// TODO: Maybe as the number of fish increases, we can have svg fish swim by
const handlePageLoad = () => {
    initializeElements();
    setFishAnimation();
    setInterval(changeButtonText, 1000);
}

const changeButtonText = () => {
    fish = fish += (fishFetcher * 2) + 1;
    fishAmountContainer.innerHTML = fish;
}

const setFishAnimation = () => {
    const fs = document.getElementById('fish-transform');
    fs.setAttribute('values', `-50 50;-50 -20;150 0;${document.documentElement.clientWidth} -20`)
}