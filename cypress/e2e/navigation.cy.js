describe("Navigation", () => {
  beforeEach(() => cy.visit("https://b-tkacz.github.io"));

  it("nav links update hash and focus target", () => {
    cy.get(".nav-container--box a").contains("Projects").click();
    cy.location("hash").should("eq", "#projects");
    // check the target element exists and is visible
    cy.get("#projects").should("be.visible");
  });

  it("Contact control opens modal (if implemented as button/link)", () => {
    cy.get("#openModal").click();
    cy.get("#modal").should("be.visible");
  });
});
