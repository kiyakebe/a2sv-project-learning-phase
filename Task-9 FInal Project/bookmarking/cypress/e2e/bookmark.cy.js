describe("JobCard Bookmark Functionality", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/bookmarks/*").as("bookmark");
    cy.intercept("DELETE", "**/bookmarks/*").as("unbookmark");
    
    cy.setCookie("hireHubAccessToken", "sampleToken");

    cy.visit("/jobs");
  });

  it("should bookmark a job", () => {
    cy.get('[data-id="bookmark"]').first().should("be.visible").click();

    cy.wait("@bookmark")
      .its("request.headers.authorization")
      .should("include", "Bearer sampleToken");

    cy.get('[data-id="unbookmark"]').should("exist");
  });

  it("should unbookmark a job", () => {
    cy.get('[data-id="bookmark"]').first().should("be.visible").click();
    cy.wait("@bookmark");

    cy.get('[data-id="unbookmark"]').first().should("be.visible").click();

    cy.wait("@unbookmark")
      .its("request.headers.authorization")
      .should("include", "Bearer sampleToken");

    cy.get('[data-id="bookmark"]').should("exist");
  });
});
