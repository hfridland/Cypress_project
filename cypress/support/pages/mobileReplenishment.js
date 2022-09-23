export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeSourceFirstName(sourceFirstName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(sourceFirstName)
    }

    typeSourceLastName(sourceLastName) {
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(sourceLastName)
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', '4552 **** **** 8217')
    }

    checkDebitAmount(debitAmount) {
        cy.get('div[data-qa-node="amount"]')
            .should('have.text', debitAmount)
    }

    checkDebitAmountAndComission(debitComission) {
        cy.get('span[data-qa-node="commission"]')
            .should('have.text', debitComission)
    }

    checkPaymentCurrency(paymentCurrency) {
        cy.get('span[data-qa-node="commission-currency"]')
            .should('have.text', paymentCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()