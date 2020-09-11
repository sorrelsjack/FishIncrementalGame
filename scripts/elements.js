let fishAmountContainer = null;
let buyFishButton = null;
let buyFishFetcherButton = null;
let buyBreedingTankButton = null;

let fishFetcherContainer = null;
let breedingTankContainer = null;

let fishFetcherCounter = null;
let breedingTankCounter = null;

const initializeElements = () => {
    fishAmountContainer = document.getElementById('fishAmountContainer');
    buyFishButton = document.getElementById('buyFishButton');
    buyFishFetcherButton = document.getElementById('buyFishFetcherButton');
    buyBreedingTankButton = document.getElementById('buyBreedingTankButton');

    fishFetcherContainer = document.getElementById('fishFetcherContainer');
    breedingTankContainer = document.getElementById('breedingTankContainer');

    fishFetcherCounter = document.getElementById('fishFetcherCounter');
    breedingTankCounter = document.getElementById('breedingTankCounter');
}