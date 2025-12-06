describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://b-tkacz.github.io");
    cy.url().should("include", "b-tkacz.github.io");
  });
});
