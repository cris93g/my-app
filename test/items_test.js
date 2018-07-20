const React = require("react");
const Items = require("../src/components/items/items");
const { expect } = require("chai");

describe("items", () => {
  describe("itemDisplay", function() {
    it("should show the items", function() {
      expect(itemsDisplay).to.be.true;
    });
  });
});
