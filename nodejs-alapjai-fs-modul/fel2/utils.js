const { access, mkdir, writeFile, copyFile, unlink } = require('fs').promises
const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const util = require('util');

const pipe = util.promisify(pipeline);

const fileOps = () => {
    access('test.html')
    .catch( () => mkdir('test.html'))
    .then( () => writeFile('./test.html', 'PIPA'))
    .then( () => copyFile('./test.html', './test.bak'))
    .then( () => {
        const gzip = createGzip();
        const source = createReadStream('./test.html')
        const dest = createWriteStream('./test.html.gz')
        return pipe(source, gzip, dest);
    })
    .then( () => unlink('./test.html'))
    .then( () => unlink('./test.bak'))
}

module.exports = { fileOps }