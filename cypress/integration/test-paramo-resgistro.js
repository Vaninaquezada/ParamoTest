/// <reference types="cypress" />

var password = "Ab" + Math.floor(Math.random() * (99999999 - 180000)) + 180000;
var email = password + "@prueba.com";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

    
context('Pruebas Paramo - Registro Usuario', () => {
    beforeEach(() => {
        cy.visit('https://demo.casino/')
   
   })
   it('Registro Usuario- Ingreso de Captcha incorrecto', () => {

    cy.get('[data-test=nav-reg-head] > span').click()
  
    //Validate page title
    cy.get('.page__title').should('have.text', 'Sign up')

    // Email label validation
    cy.get('.active > .form__input > .label-input').should('have.text', 'Email')
    //Enter email
    cy.get('[data-test=input-email]').type(email)
    .should('have.value', email)

    //Click to agree to the terms and conditions
    cy.get('.form__section--registration > :nth-child(2) > label').click()

      // Password label validation
    cy.get(':nth-child(3) > .label-input').should('have.text', 'Password')
     //Enter Password 
    cy.get('[data-test=input-password]').type(password)
    .should('have.value', password)
    
    // Password confirmation label validation
    cy.get(':nth-child(4) > .label-input').should('have.text', 'Repeat password')

    //Enter Password confirmation
    cy.get('[data-test=input-password_confirmation]').type(password)
    .should('have.value', password)

    //Enter captcha code
    cy.get('[data-test=input-captcha]').type('uoxirpm')
    .should('have.value', 'uoxirpm')
   
    //Click on button Registration
    cy.get('[data-test=control-submit] > span').click()
    //Message error validation
    cy.get('[data-test=error-verifyCode]').should('have.text', 'The verification code is incorrect.')
    
    })

    it('Registro Usuario - Ingreso de Email sin @', () => {

        cy.get('[data-test=nav-reg-head] > span').click()
      
        //Validate page title
        cy.get('.page__title').should('have.text', 'Sign up')
    
        // Email label validation
        cy.get('.active > .form__input > .label-input').should('have.text', 'Email')
        //Enter email
        cy.get('[data-test=input-email]').type('mailaa.com')
        .should('have.value', 'mailaa.com')
    
        //Click to agree to the terms and conditions
        cy.get('.form__section--registration > :nth-child(2) > label').click()
    
          // Password label validation
        cy.get(':nth-child(3) > .label-input').should('have.text', 'Password')
         //Enter Password 
        cy.get('[data-test=input-password]').type(password)
        .should('have.value', password)
        
        // Password confirmation label validation
        cy.get(':nth-child(4) > .label-input').should('have.text', 'Repeat password')
    
        //Enter Password confirmation
        cy.get('[data-test=input-password_confirmation]').type(password)
        .should('have.value', password)
    
        //Enter captcha code
        cy.get('[data-test=input-captcha]').type('uoxirpm')
        .should('have.value', 'uoxirpm')
       
        //Click on button Registration
        cy.get('[data-test=control-submit] > span').click()
        //Message error validation
        cy.get('[data-test=error-email]').should('have.text', 'Invalid email')
        
        })

        it('Registro Usuario - Ingreso de password sin Letra minuscula', () => {

            cy.get('[data-test=nav-reg-head] > span').click()
          
            //Validate page title
            cy.get('.page__title').should('have.text', 'Sign up')
        
            // Email label validation
            cy.get('.active > .form__input > .label-input').should('have.text', 'Email')
            //Enter email
            cy.get('[data-test=input-email]').type(email)
            .should('have.value', email)        
        
            //Click to agree to the terms and conditions
            cy.get('.form__section--registration > :nth-child(2) > label').click()
        
              // Password label validation
            cy.get(':nth-child(3) > .label-input').should('have.text', 'Password')
             //Enter Password 
            cy.get('[data-test=input-password]').type('P123456')
            .should('have.value', 'P123456')
            
            // Password confirmation label validation
            cy.get(':nth-child(4) > .label-input').should('have.text', 'Repeat password')
        
            //Enter Password confirmation
            cy.get('[data-test=input-password_confirmation]').type('P123456')
            .should('have.value', 'P123456')
        
            //Enter captcha code
            cy.get('[data-test=input-captcha]').type('uoxirpm')
            .should('have.value', 'uoxirpm')
           
            //Click on button Registration
            cy.get('[data-test=control-submit] > span').click()
            //Message error validation
            cy.get('[data-test=error-password]').should('have.text', '1 lowercase letter required')
            
            })

            it('Registro Usuario - Ingreso de password repetida diferente', () => {

                cy.get('[data-test=nav-reg-head] > span').click()
              
                //Validate page title
                cy.get('.page__title').should('have.text', 'Sign up')
            
                // Email label validation
                cy.get('.active > .form__input > .label-input').should('have.text', 'Email')
                //Enter email
                cy.get('[data-test=input-email]').type(email)
                .should('have.value', email)
            
                //Click to agree to the terms and conditions
                cy.get('.form__section--registration > :nth-child(2) > label').click()
            
                  // Password label validation
                cy.get(':nth-child(3) > .label-input').should('have.text', 'Password')
                 //Enter Password 
                cy.get('[data-test=input-password]').type('Prueba1')
                .should('have.value', 'Prueba1')
                
                // Password confirmation label validation
                cy.get(':nth-child(4) > .label-input').should('have.text', 'Repeat password')
            
                //Enter Password confirmation
                cy.get('[data-test=input-password_confirmation]').type('Prueba2')
                .should('have.value', 'Prueba2')
            
                //Enter captcha code
                cy.get('[data-test=input-captcha]').type('uoxirpm')
                .should('have.value', 'uoxirpm')
               
                //Click on button Registration
                cy.get('[data-test=control-submit] > span').click()
                //Message error validation
                cy.get('[data-test=error-password_confirmation]').should('have.text', 'Password must be strictly repeated.')
                
                })


                it('Registro Usuario - Validacion de mensaje al no aceptar terminos y condiciones', () => {

                    cy.get('[data-test=nav-reg-head] > span').click()
                  
                    //Validate page title
                    cy.get('.page__title').should('have.text', 'Sign up')
                
                    // Email label validation
                    cy.get('.active > .form__input > .label-input').should('have.text', 'Email')
                    //Enter email
                    cy.get('[data-test=input-email]').type(email)
                    .should('have.value', email)                
                           
                      // Password label validation
                    cy.get(':nth-child(3) > .label-input').should('have.text', 'Password')
                     //Enter Password 
                    cy.get('[data-test=input-password]').type(password)
                    .should('have.value', password)
                    
                    // Password confirmation label validation
                    cy.get(':nth-child(4) > .label-input').should('have.text', 'Repeat password')
                
                    //Enter Password confirmation
                    cy.get('[data-test=input-password_confirmation]').type(password)
                    .should('have.value', password)
                
                    //Enter captcha code
                    cy.get('[data-test=input-captcha]').type('uoxirpm')
                    .should('have.value', 'uoxirpm')
                   
                    //Click on button Registration
                    cy.get('[data-test=control-submit] > span').click()
                    //Message error validation
                    cy.get('[data-test=error-terms_and_conditions]').should('have.text', 'You have to accept our Terms and Conditions.')
                    
                    })

})