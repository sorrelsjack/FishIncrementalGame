const handlePurchaseOneFishClicked = () => {
    fish = fish += 1;
    setFishAmountInUi();
}

const handlePurchaseFishFetcherClicked = () => {
    const calculateFishFetcherCost = () => Math.floor(10 * Math.pow(1.1, fishFetcher));

    const fishFetcherCost = calculateFishFetcherCost();

    if (fish < fishFetcherCost) return;

    fishFetcher = fishFetcher += 1;
    fish = fish -= fishFetcherCost;

    setFishAmountInUi();
    buyFishFetcherButton.innerHTML = `Buy Fish Fetcher for ${calculateFishFetcherCost()} Fish`; // Display the next cost so the user knows how much to save up to
    fishFetcherCounter.innerHTML = fishFetcher;

    resetTimer();
}

const handlePurchaseBreedingTankClicked = () => {
    const calculateBreedingTankCost = () => Math.floor(100 * Math.pow(1.1, breedingTank));

    const breedingTankCost = calculateBreedingTankCost();

    if (fish < breedingTankCost) return;

    breedingTank = breedingTank += 1;
    fish = fish -= breedingTankCost;

    setFishAmountInUi();
    buyBreedingTankButton.innerHTML = `Buy Breeding Tank for ${calculateBreedingTankCost()} Fish`; // Display the next cost so the user knows how much to save up to
    breedingTankCounter.innerHTML = breedingTank;

    resetTimer();
}