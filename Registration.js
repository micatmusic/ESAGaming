/// <reference types="Cypress" />

describe ('My First Test Suite', function() {    
    
    it('Login Test case', function() {
    
   

    cy.visit("https://practicesoftwaretesting.com/#/") 
    cy.get('[data-test="nav-sign-in"]').click()  
    cy.get('[data-test="register-link"]').click()   
    cy.get('[data-test="first-name"]').type('Milica')
    cy.get('[data-test="last-name"]').type('Tmusic')
    cy.get('[data-test="dob"]').type('1989-06-27')
    cy.get('[data-test="address"]').type('Vozdovac')
    cy.get('[data-test="postcode"]').type('11000')
    cy.get('[data-test="city"]').type('Belgrade')
    cy.get('[data-test="state"]').type('Serbia')
    cy.get('[data-test="country"]').select('Serbia')
    cy.get('[data-test="phone"]').type('00381691469125')
    cy.get('[data-test="email"]').type('mica.tmusic@gmail.com')
    cy.get('[data-test="password"]').type('OpsnF+zeFgQWEJ3')
    cy.get('[data-test="register-submit"]').click()



})
    
})
