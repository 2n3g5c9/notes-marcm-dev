/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe()
  })
  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y()
  })
  it('Navigates to about page and checks for accessibility violations', () => {
    cy.findByText(/More about me/i)
      .click()
      .checkA11y()
    cy.go('back')
  })
  it('Navigates to about page and checks for accessibility violations', () => {
    cy.findByText(/Read the notes/i)
      .click()
      .checkA11y()
  })
})
