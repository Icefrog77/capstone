const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const expected = "344424423322";
  
      const actual = polybius(message);
  
      expect(actual).to.deep.equal(expected);
    });
  });