const handlePurchaseOneFishClicked = () => {
    fish = fish += 1;
    fishAmountContainer.innerHTML = fish;
}

const handlePurchaseFishFetcherClicked = () => {
    const fishFetcherCost = Math.floor(10 * Math.pow(1.1, fishFetcher));

    if (fish < fishFetcherCost) return;

    fishFetcher = fishFetcher += 1;
    fish = fish -= fishFetcherCost;

    buyOneFishFetcherButton.innerHTML = `Buy 1 Fish Fetcher for ${fishFetcherCost} Fish`
}