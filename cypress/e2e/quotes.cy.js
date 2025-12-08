describe("Quotes Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    ).as("getQuote");
    cy.visit("/quotes.html");
    cy.viewport(1280, 720);
    cy.wait("@getQuote").its("response.statusCode").should("eq", 200);
  });

  it("Should load the Quotes page and verify title", () => {
    cy.get(".quote").should("have.length.greaterThan", 0);
  });

  it("Should have a Ron Swanson Signature", () => {
    cy.get(".signature").should("contain.text", " - Ron Swanson");
  });

  it("Get new quote on button click", () => {
    cy.buttonClick("button#getQuote");
    cy.wait("@getQuote").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      cy.get("p#quote").should("have.text", interception.response.body[0]);
    });
  });
});
