let money = 0;
let fish = 0;
let fishFetcher = 0;

const handlePageLoad = () => {
    setInterval(changeButtonText, 1000);
}

const changeButtonText = () => {
    money = money += 1;
    fish = fish += (fishFetcher * 2);

    document.getElementById('moneyContainer').innerHTML = money;
    document.getElementById('fishAmountContainer').innerHTML = fish;
}

const handlePurchaseFishClicked = () => {
    const fishCost = Math.floor(5 * Math.pow(1.1, fish));

    if (money < fishCost) return;

    fish = fish += 1;
    money = money -= fishCost;

    document.getElementById('moneyContainer').innerHTML = money;
    document.getElementById('fishAmountContainer').innerHTML = fish;
    document.getElementById('buyOneFishButton').innerHTML = `Buy 1 Fish for $${fishCost}`
}

const handlePurchaseFishFetcherClicked = () => {
    const fishFetcherCost = Math.floor(12 * Math.pow(1.1, fishFetcher));

    if (money < fishFetcherCost) return;

    fishFetcher = fishFetcher += 1;
    money = money -= fishFetcherCost;

    document.getElementById('moneyContainer').innerHTML = money;
    document.getElementById('buyOneFishFetcherButton').innerHTML = `Buy 1 Fish Fetcher for $${fishFetcherCost}`
}