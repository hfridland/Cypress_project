export class Transfers {

    typeDebitNameAndSurname(name, surname) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeReceiverCard(receiverCard) {
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCard)
    }

    typeReceiveNameAndSurname(name, surname) {
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(surname)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    checkDebitAndReceiverCards(debitCard, receiverCard) {
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotalAmount(debitAmount, totalAmount) {
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)
            .get('[data-qa-node="total"]')
            .find('div')
            .should('have.text', totalAmount)
    }

    checkDebitComission(comission) {
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', comission)
    }

    checkComment(comment) {
        cy.get('[data-qa-node="comment"]')
            .should('contain.text', comment)
    }
}

export const transfers = new Transfers()