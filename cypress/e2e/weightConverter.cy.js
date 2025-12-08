describe("Weight Converter Page", () => {
  beforeEach(() => {
    cy.visit("/weight-converter.html");
    cy.viewport(1280, 720);
  });

  it("Check title and placeholder value", () => {
    cy.get("h1.converter-title").should("have.text", "Weight Converter");
    cy.shouldHavePlaceholder("input#lbsInput", "Enter Pounds...");
  });

  [1, 10, 37.5, 100].forEach((lbs) => {
    it(`converts ${lbs} lb correctly`, () => {
      const expectedGrams = Math.round((lbs / 0.0022046) * 100) / 100;
      const expectedKilograms = Math.round((lbs / 2.2046) * 100) / 100;
      const expectedOunces = Math.round(lbs * 16 * 100) / 100;

      cy.get("input#lbsInput").clear().type(String(lbs));
      cy.get("#gramsOutput").should("have.text", expectedGrams.toString());
      cy.get("#kgOutput").should("have.text", expectedKilograms.toString());
      cy.get("#ozOutput").should("have.text", expectedOunces.toString());
    });
  });
});
