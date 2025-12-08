describe("Homepage Smoke", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("Load the page and check title and meta description", () => {
    cy.url().should("include", "b-tkacz.github.io");
    cy.title().should("eq", "Bartosz Tkacz Portfolio");
    cy.get('head meta[name="description"]')
      .should("have.attr", "content")
      .and("include", "Bartosz Tkacz Portfolio - Test Automation Engineer");
  });

  it("Check for console errors", () => {
    const errors = [];
    cy.on("window:console", (msg) => {
      const orig = msg.console.error;
      win.console.error = (...args) => {
        errors.push(args);
        orig.apply(win.console, args);
      };
    });
  });

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
