const { mkdir, writeFile } = require('fs').promises

const structFolders = () => {
    mkdir('controllers')
      .then(() => mkdir('routers'))
      .then(() => mkdir('views'))
      .then(() => writeFile('./controllers/site.controller.js', 'PIPA'))
      .then(() => writeFile('./routers/site.router.js', 'PIPA'))
      .then(() => writeFile('./views/index.html', 'PIPA'))
      .then(() => writeFile('app.js', 'PIPA'))
  }
  
