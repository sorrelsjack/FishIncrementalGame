const handlePurchaseFishFetcherClicked = () => {
    const fishFetcherCost = Math.floor(12 * Math.pow(1.1, fishFetcher));

    if (fish < fishFetcherCost) return;

    fishFetcher = fishFetcher += 1;
    fish = fish -= fishFetcherCost;

    buyOneFishFetcherButton.innerHTML = `Buy 1 Fish Fetcher for ${fishFetcherCost} Fish`
}