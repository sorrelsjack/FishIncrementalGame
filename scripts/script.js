let fish = 0;
let fishFetcher = 0;
let breedingTank = 0;
let timer = null;

// Fish borrowed from https://codepen.io/Astrak/pen/MYVZVo
// Hmmmm. Can we do away with money and make fish the currency? We can be breeding fish and then we can trade those fish for filters and supplies to better water quality and increase number of fish
// Different types of fish maybe?

// TODO: Maybe as the number of fish increases, we can have svg fish swim by
// TODO: Disable buttons if you don't have enough fish to trade for them
const handlePageLoad = () => {
    initializeElements();
    setFishAnimation();
    setTimer();
}

const setTimer = () => timer = setInterval(updateState, 1000);

const updateState = () => {
    fish = fish += ((fishFetcher * .1) + (fish >= 2 ? breedingTank * 2 : 0));
    updateButtonVisibilities();
    setFishAmountInUi();
}

const updateButtonVisibilities = () => {
    if (fish >= 10 && fishFetcherContainer.style.display !== 'block') fishFetcherContainer.style.display = 'block';
    if (fish >= 100 && breedingTankContainer.style.visibility !== 'block') breedingTankContainer.style.display = 'block';
}

const setFishAnimation = () => {
    const fs = document.getElementById('fish-transform');
    fs.setAttribute('values', `-50 50;-50 -20;150 0;${document.documentElement.clientWidth} -20`)
}

const setFishAmountInUi = () => fishAmountContainer.innerHTML = Math.floor(fish);

const resetTimer = () => {
    clearInterval(timer);
    setTimer();
}