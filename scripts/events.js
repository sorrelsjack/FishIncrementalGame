const handlePurchaseFishClicked = () => {
    const fishCost = Math.floor(5 * Math.pow(1.1, fish));

    if (money < fishCost) return;

    fish = fish += 1;
    money = money -= fishCost;

    moneyContainer.innerHTML = money;
    fishAmountContainer.innerHTML = fish;
    buyOneFishButton.innerHTML = `Buy 1 Fish for $${fishCost}`
}

const handlePurchaseFishFetcherClicked = () => {
    const fishFetcherCost = Math.floor(12 * Math.pow(1.1, fishFetcher));

    if (money < fishFetcherCost) return;

    fishFetcher = fishFetcher += 1;
    money = money -= fishFetcherCost;

    moneyContainer.innerHTML = money;
    buyOneFishFetcherButton.innerHTML = `Buy 1 Fish Fetcher for $${fishFetcherCost}`
}