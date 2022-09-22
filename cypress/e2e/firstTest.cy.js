/// <reference types="cypress" />

//type
it('type', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('112233344')
})

//focus
it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})

//blur
it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})

//clear
it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type('999')
        .wait(200)
        .clear()
})

//submit
it('submit', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

//click
it('click', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

//rightclick
it('rightclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

//dblclick
it('dblclick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        .contains('My Card')
        .dblclick()
})

//check
it('check', () => {
    //cy.visit('https://www.facebook.com/r.php?locale=en_US')
    cy.visit('https://www.facebook.com/reg/?')
    return
    cy.get('[data-testid="open-registration-form-button"]')
    .click()
        /*.get('input[value="2"]')
        .check()*/
})

//uncheck
it('uncheck', () => {
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .uncheck()
})

//scroll
it('scroll', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()
})

//scrollTo
it('scrollTo', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        //.wait(2000)
        .scrollTo(0, 500)
})

//trigger
it.only('trigger', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .trigger('mouseover')
})