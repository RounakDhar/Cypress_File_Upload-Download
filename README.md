# Cypress_File_Upload-Download
Building Cypress Script - Showing how to Upload or Download File

Upload File:
1.Run the Below in Terminal:

npm install --save -dev cypress-file-upload

2.Add the below line in  commands.js:

import 'cypress-file-upload';




Download File :
1.Run the Below in Terminal:

npm install --save -dev cypress-downloadfile

2.Add the below line in  index.js:

const {downloadedFile} = require('cypress-downloadedFile/lib/addPlugin')
module.exports = (on,config) =>{
  on('task',{downloadedFile})
}

