/// <reference types="cypress" />

export class MainPage {
  navigate() {
    cy.visit("http://localhost:3000");
  }

  mainText(text) {
    cy.get("h1").should("have.text", text);
  }

  mainDescription(text) {
    cy.get("p").should("have.text", text);
  }
  mainImage() {
    cy.get("img").should('be.visible');
  }
}
