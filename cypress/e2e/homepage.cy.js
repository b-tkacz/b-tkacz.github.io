describe("Homepage", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  describe("Page Loads Successfully", () => {
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

  describe("Navigation and Interactions", () => {
    it("nav links update hash and focus target", () => {
      cy.checkHashNav("Work", "#work");
      cy.checkHashNav("Projects", "#projects");
      cy.checkHashNav("About", "#about");
      cy.checkHashNav("Home", "#home");
      cy.checkHashNav("Contact", "#contact");
    });
  });

  describe("Contact Modal", () => {
    const email = "input[type='email']";
    const message = 'textarea[name="message"]';

    beforeEach(() => {
      cy.buttonClick("#openModal");
      cy.get("#modal").should("be.visible");
    });

    it("Open contact modal and verify contents", () => {
      cy.get("#modal h1").should("have.text", "Contact me");
      cy.get("#modal p")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.match(
            /Feel free to leave\s+some feedback or message me about work/i
          );
        });
    });

    it("Should display correct placeholders in the contact form ", () => {
      cy.get("#modal")
        .should("be.visible")
        .within(() => {
          cy.shouldHavePlaceholder(email, "Your email");
          cy.shouldHavePlaceholder(message, "Your message");
        });
    });

    it("Send a message and check response", () => {
      cy.intercept("POST", "https://formspree.io/*/*").as("formSubmit");

      cy.get(email).focus().type("test@email.com");
      cy.get(message).focus().type("This is a message from an automated test.");

      cy.buttonClick('button[type="submit"]');
      cy.wait("@formSubmit").then((interception) => {
        expect(interception.response.statusCode).to.equal(302);
        expect(interception.request.body).to.include(
          "_replyto=test%40email.com"
        );
        expect(interception.request.body).to.include(
          "message=This+is+a+message+from+an+automated+test."
        );
      });
    });
  });
});
