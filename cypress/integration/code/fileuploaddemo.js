///<reference types = "Cypress" />

//const { functions } = require("cypress/types/lodash");

//describe('Upload the file',()=>{
    describe('Upload the file',function() {
    
        it('Upload the File and Assert the Name of the File Uploaded',function(){
            const yourFilePath = 'Screenshot (130).png'

            cy.visit("https://the-internet.herokuapp.com/upload")

            cy.get("#file-upload").attachFile(yourFilePath)
            cy.get("#file-submit").click()
            cy.get("#uploaded-files").contains("Screenshot (130)")

        })

})