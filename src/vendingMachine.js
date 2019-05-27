class VendingMachine {
  constructor(coins, inventory) {
    this.inventory = inventory;
    this.coins = coins;
  }

  refillCoins = () => {};

  refillInventory = () => {};

  customerCredit = () => {};

  updateCoins = () => {};

  updateInventory = () => {};

  selectProduct = () => {};

  dispenseChange = () => {};

  stopOperating = () => {};
}

export default VendingMachine;
