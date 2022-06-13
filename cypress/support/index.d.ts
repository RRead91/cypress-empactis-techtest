/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    setup(): Chainable<any>
  }
}