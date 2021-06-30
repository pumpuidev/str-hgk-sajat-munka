const { Logger } = require('./utils')
const { join } = require('path')
const { createReadStream, createWriteStream, rename } = require('fs')
const { Transform } = require('stream')

const logger = new Logger()