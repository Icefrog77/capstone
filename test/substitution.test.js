const { expect } = require("chai");
const { substitution } = require("../src/substitution");
describe("My function", () => {
    it("checks if string works", () => {
      const message ="String"
      const alphabet ="zyxwvutsrqponmlkjihgfedcba"
      const expected = "hgirmt";
  
      const actual = substitution(message, alphabet);
  
      expect(actual).to.deep.equal(expected);
    });
  });