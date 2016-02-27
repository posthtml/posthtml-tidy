'use strict'

const fs = require('fs')

let posthtml = require('posthtml')

let tidy = require('../index')()

let html = fs.readFileSync('./index.html', 'utf-8')

posthtml([ tidy ])
  .process(html)
  .then(result => result.html)
