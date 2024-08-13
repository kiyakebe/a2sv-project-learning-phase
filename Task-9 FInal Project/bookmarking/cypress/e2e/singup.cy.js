describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get('a[href*="api/auth/signin"]').click();

    cy.url().should("include", "/signin");

    cy.get("#email").type("conag33575@almaxen.com");
    cy.get("#password").type("conag33575@almaxen.com");

    cy.get("#submit").click();

    cy.wait(6000);
  });

  it("should navigate to the signup page", () => {
    cy.url().should("include", "/jobs");

    cy.wait(6000)

    cy.get('[data-id="bookmark"]').should("exist");
    cy.get('[data-id="bookmark"]').first().should("be.visible").click();

    cy.wait(6000);

    cy.get('[data-id="unbookmark"]').should("exist");
    cy.get('[data-id="unbookmark"]').first().should("be.visible").click();

    cy.wait(6000);

    cy.get('[data-id="bookmark"]').should("exist");
  });
});
