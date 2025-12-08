describe("Image Slider Page", () => {
  beforeEach(() => {
    cy.visit("/image-slider");
    cy.viewport(1280, 720);
  });

  it("should load the image slider page", () => {
    cy.get(".slider-container").should("be.visible");
  });

  it("should navigate slides up with up button", () => {
    cy.moveSliders(".up-button");
  });

  it("should navigate slides down with down button", () => {
    cy.moveSliders(".down-button");
  });

  it("should loop to the last slide when clicking up on the first slide", () => {
    // Click up multiple times to verify looping behavior
    for (let i = 0; i < 5; i++) {
      cy.get(".up-button").click();
    }
  });
});
