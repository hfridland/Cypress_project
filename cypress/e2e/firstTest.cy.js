/// <reference types="cypress" />

import { mobileReplenishment } from '../support/pages/mobileReplenishment'
import { transfers } from '../support/pages/transfers'
import { basePage} from '../support/pages/basePage'

it.skip('Replenishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(1000)
    mobileReplenishment.typeSourceFirstName('Shayne')
    mobileReplenishment.typeSourceLastName('McConnell')
    cy.wait(3000)
    basePage.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1 UAH')
    mobileReplenishment.checkDebitAmountAndComission('2')
    mobileReplenishment.checkPaymentCurrency(' UAH')
})

it.skip('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')

    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeReceiveNameAndSurname('Juliana', 'Janssen')
    basePage.typeAmount('400')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    basePage.submitPayment()
    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('400 UAH', '518.49 UAH')
    transfers.checkDebitComission('118.49 UAH')
    transfers.checkComment('Cypress test')
})

it.skip('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then(response => {
            console.log(response)
        })
})

it('Example sending the POST request', () => {
    const requestBody = {       
        action: 'info',
        phone: '+380686979712',
        amount: 50,
        currency: 'UAH',
        cardCvv: '111',
        card: '4552331448138217',
        cardExp: '0526',
        xref: '4b55a8ad165eda03c8c5ca1cbf55b4b7',
        '-': 1663897531419

    }

    const headersData = {
        cookie: '_ga=GA1.2.1267993445.1663792348; _gid=GA1.2.1481065971.1663792348; pubkey=88654dca36f80e047cd41bd79da094f8; lfp=9/21/2022, 1:32:39 PM; pa=1663897284643.47140.5904100887407238next.privat24.ua0.5462836494299079+1; fp=11'
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).then(response => {
            console.log(response)
        })
})