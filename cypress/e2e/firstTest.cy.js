/// <reference types="cypress" />


describe('Mobile phone replenishment', () => {
    context('Replenishment less than the allowed amount', () => {
        it('Show error: Minimum amount of the replenishment 1 UAH', () => {

        })    
    })
 
})

it('By Id', () => {
    cy.visit('https://facebook.com/')
    cy.get('#email')
})

it('By class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('.language-javascript')
})

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('nav')
})

it('By Tag value', () => {
    cy.visit('https://facebook.com/')
    cy.get('[name="pass"]')
})

it('By Different Tag value', () => {
    cy.visit('https://facebook.com/')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
})

it('By Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('button[type="button"][title="close bunner"]')
})

it.only('By Contains name', () => {
    cy.visit('https://next.privat24.ua')
    cy.get('*[class^="card"]')
})

// Comment
it('Using Get with Find and eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only('Using Get with Find and eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    //cy.get('aside').find('div').find('ol').find('li').find('a')
    cy.get('div.hidden').find('nav').find('ul').find('li').find('a').eq(0)
})
