///<reference types = "Cypress" />

//const { functions } = require("cypress/types/lodash");

//describe('Upload the file',()=>{
    describe('Upload file', function() {
    
        it('Upload File', function(){

            const yourFixturePath = 'Screenshot (130).png'

            cy.visit("https://the-internet.herokuapp.com/upload")

            cy.get("#file-upload").attachFile(yourFixturePath)
            cy.get("#file-submit").click()
            //cy.get("#uploaded-files").contains("Screenshot (130)")
        })

})