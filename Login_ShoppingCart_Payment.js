/// <reference types="Cypress" />

describe ('My First Test Suite', function() {    
    
    it('Login Test case', function() {
    
    
    cy.visit("https://practicesoftwaretesting.com/#/auth/login")



  
    cy.get('#email').as('UserID')
    cy.get('#password').as('UserPassword')    
    cy.get('[data-test="login-submit"]').as('LoginButton')
    
    //Positive Test - provided valid credentials - passed     
    cy.get('@UserID').type('mica.tmusic@gmail.com')
    cy.get('@UserPassword').type('OpsnF+zeFgQWEJ3')
    cy.get('@LoginButton').click()
    
    // Further testing in not possible due to reported bug (Bug ID: Bug1)
   
    
    //Shopping cart
    cy.get('.navbar-brand').click()
    cy.get('[data-test="category-01HFS6AKR8JCF6FDN87ZDRFESX"]').check()
    cy.get('[data-test="product-01HFS6AKS20C6KXT7TS8CM3AN4"] > .card-img-wrapper > .card-img-top').click()
    cy.get('[data-test="increase-quantity"] > .fa').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.wait(3000)
    cy.get('.toast-body').should('contain', 'Product added to shopping cart')
    cy.get('[data-test="nav-cart"]').click()
    cy.get('[data-test="proceed-1"]').click()
    cy.get('[data-test="email"]').type('mica.tmusic@gmail.com')
    cy.get('[data-test="password"]').type('OpsnF+zeFgQWEJ3')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="proceed-2"]').click()
    cy.get('[data-test="proceed-3"]').click()
    cy.get('[data-test="payment-method"]').select('Buy Now Pay Later')
    cy.get('[data-test="account-name"]').type('Milica')
    cy.get('[data-test="account-number"]').type('1')
    cy.get('aw-wizard-completion-step > .container > .row > .col-md-6 > .float-end').click()
    cy.get('.alert').should('contain', 'Payment was successful')
    
    })
    
    })