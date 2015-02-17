describe('triType', function() {

  it("will reject invalid dimensions", function() {
    expect(triType(2,3,5)).to.equal("Not A Valid Triangle!");
  });

  it("will reject missing or non-numerical form entries", function() {
    expect(triType(2,3,"")).to.equal("Not A Valid Triangle!");
  });

  it("checks for an equilateral triangle", function() {
    expect(triType(2,2,2)).to.equal("Equilateral");
  });

  it("checks for an isosceles triangle", function() {
    expect(triType(2,2,3)).to.equal("Isosceles");
  });

  it("checks for a scalene triangle", function() {
    expect(triType(3,4,5)).to.equal("Scalene");
  });

});
