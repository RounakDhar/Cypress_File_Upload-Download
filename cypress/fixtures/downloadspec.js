require('cypress-downloadedFile/lib/downloadFileCommand')

describe('Download Demo',function(){

    it('Download',function(){
        cy.downloadFile('https://library.concordia.ca/help/technology/recovering_saved_files.pdf','text','demo.pdf')
    })
})