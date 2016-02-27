// ------------------------------------
// #POSTHTML - TIDY
// ------------------------------------

'use strict'

const chalk = require('chalk')

const tidy = require('htmltidy2').tidy

const render = require('posthtml-render')

exports = module.exports = function (options) {
  options = options || {}
  options.option = options.option || {}

  return function PostHTMLTidy (tree) {
    tidy(render(tree), options.option, (err, msg) => {
      if (err) {
        console.log(err)
      }
      console.log(msg)
    })
    return tree
  }
}
