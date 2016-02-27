'use strict'

const fs = require('fs')

let posthtml = require('posthtml')

let tidy = require('../index')({
  log: true,
  rules: {
    doctype: 'omit',
    hideComments: true,
    dropEmptyElements: true
  }
})

let html = fs.readFileSync('./index.html', 'utf-8')

posthtml([ tidy ])
  .process(html)
  .then(result => result.html)
