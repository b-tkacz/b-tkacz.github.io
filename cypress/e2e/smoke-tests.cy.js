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
});
