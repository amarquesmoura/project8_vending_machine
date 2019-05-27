import data from "../data/vendingMachineInventory.json";
import VendingMachine from "../src/vendingMachine";

describe("Vending Machine", () => {
  describe("Refilling with coins", () => {
    it("should update the quantity when coins are added", () => {});
  });

  describe("Refilling with products", () => {
    it("should update the quantity when products are added", () => {});
  });

  describe("Buying products", () => {
    it("should updated customer credit when coins are inserted", () => {});

    it("should alert the customer when credit is insuficient for the product selected", () => {});

    it("should update inventory when a product is bought", () => {});

    it("should dispense the change, if any, when the purchase is concluded", () => {});

    it("should update the coins in the machine when the purchase is concluded", () => {});

    it("should alert the customer when the chosen product is out of stock", () => {});

    it("should alert the customer when out of change", () => {});

    it("should not accept coins when completely out of stock", () => {});
  });
});
