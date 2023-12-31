const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const shift =5
      const expected = "xywnsl";
  
      const actual = caesar(message, shift);
  
      expect(actual).to.deep.equal(expected);
    });
  });