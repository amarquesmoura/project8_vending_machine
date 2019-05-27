import data from "../data/vendingMachineInventory";
import VendingMachine from "../src/vendingMachine";

const coins = data.coins;
const inventory = data.inventory;

describe("Vending Machine", () => {
  beforeEach(() => {
    vendingMachine = new VendingMachine(coins, inventory);
  });

  describe("Refilling with coins", () => {
    it("should update the quantity when coins are added", () => {
      const nickels = vendingMachine.refillCoins();
      expect(nickels).toBe();
    });
  });

  describe("Refilling with products", () => {
    it("should update the quantity when products are added", () => {
      const coke = vendingMachine.refillInventory();
      expect(coke).toBe();
    });
  });

  describe("Buying products", () => {
    it("should updated customer credit when coins are inserted", () => {
      const credit = vendingMachine.customerCredit();
      expect(credit).toBe();
    });

    it("should alert the customer when credit is insuficient for the product selected", () => {
      const credit = vendingMachine.customerCredit();
      const product = vendingMachine.selectProduct();
      expect(() => vendingMachine()).toThrow(
        "Insuficient funds. Please insert more coins."
      );
    });

    it("should update inventory when a product is bought", () => {
      const newInventory = vendingMachine.updateInventory();
      expect(newInventory).toBe();
    });

    it("should dispense the change, if any, when the purchase is concluded", () => {
      const change = vendingMachine.dispenseChange();
      expect(change).toBe();
    });

    it("should update the coins in the machine when the purchase is concluded", () => {
      const newCoins = vendingMachine.updateCoins();
      expect(newCoins).toBe();
    });

    it("should alert the customer when the chosen product is out of stock", () => {
      const product = vendingMachine.selectProduct();
      expect(() => vendingMachine()).toThrow(
        "Product not available. Please select another product."
      );
    });

    it("should alert the customer when out of change", () => {
      const noChange = vendingMachine.updateCoins();
      expect(() => vendingMachine()).toThrow(
        "Change not available. Please insert exact product value."
      );
    });

    it("should not accept coins when completely out of stock", () => {
      const outOfStock = vendingMachine.stopOperating();
      expect(() => vendingMachine()).toThrow(
        "Machine not operating. Out of stock."
      );
    });
  });
});
