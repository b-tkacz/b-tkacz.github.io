describe("Weight Converter Page", () => {
  beforeEach(() => {
    cy.visit("/weight-converter.html");
    cy.viewport(1280, 720);
  });

  it("Check title and placeholder value", () => {
    cy.get("h1.converter-title").should("have.text", "Weight Converter");
    cy.shouldHavePlaceholder("input#lbsInput", "Enter Pounds...");
  });

  it("Convert Pounds to grams", () => {
    cy.get("input#lbsInput").type("10");
  });
});
