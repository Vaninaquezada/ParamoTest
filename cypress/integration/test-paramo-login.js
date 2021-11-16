/// <reference types="cypress" />

 let password = "Ab123456";
 let email = "van2use88@gmail.com";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

    
context('Pruebas Paramo - Perfil de Usuario', () => {
    beforeEach(() => {
        //Open Url
        cy.visit('https://demo.casino/')

        //User login

        //Click on login button 
        cy.get('[data-test=nav-login-head]').click()
        //Validate page title
        cy.get('.page__title').should('have.text', 'Sign in') 

         //Validate label username 
        cy.get('.form__input--text > .label-input').should('have.text', 'Your login, email or phone number')
        //Enter username
        cy.get('[data-test=input-username]').type(email)
        .should('have.value', email) 

        //Validate password label
        cy.get('.form__input--password > .label-input').should('have.text', 'Password')
       
        //Enter password
        cy.get('[data-test=input-password]').type(password)
        .should('have.value', password)

        //click submit button
        cy.get('[data-test=control-submit]').click()
   })

   it('Completar y guardar datos del perfil de usuario', () => {

    //click on user profile
    cy.get('.user-avatar__links').click()
    cy.get('.page__title').should('have.text', 'My profile')

    //Validate name label
    cy.get('[data-test=form-profile-personal] > .profile-info__form-inner > :nth-child(1) > .label-input').should('have.text', 'First name')
    //Enter name
    cy.get('[data-test=input-name]').clear().type('Marie')
    .should('have.value', 'Marie')    
    
     //Validate surname label
    cy.get('[data-test=form-profile-personal] > .profile-info__form-inner > :nth-child(2) > .label-input').should('have.text', 'Last name')
      //Enter surname
    cy.get('[data-test=input-surname]').clear().type('Fulana')
    .should('have.value', 'Fulana')    
    
     //Validate middle_name label
     cy.get('[data-test=form-profile-personal] > .profile-info__form-inner > :nth-child(3) > .label-input').should('have.text', 'Middle name')
      //Enter middle_name
    cy.get('[data-test=input-middle_name]').clear().type('De Tal')
    .should('have.value', 'De Tal')    
    
    
     //Validate birthdate label
    cy.get('.form__input--date > .label-input').should('have.text', 'Date of birth')
  

   //click on button save
    cy.get('[data-test=form-profile-personal] > .profile-info__form-button > [data-test=control-submit]').click()

    //Validate data saved message
    cy.get('.toast').should('have.text', 'Data has been successfully saved')

    })


})