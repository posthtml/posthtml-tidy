// ------------------------------------
// #POSTHTML - TIDY
// ------------------------------------

'use strict'

const chalk = require('chalk')

const tidy = require('htmltidy2').tidy

const render = require('posthtml-render')

exports = module.exports = function (options) {
  options = options || {}
  options.log = options.log || false
  options.rules = options.rules || {}

  return function PostHTMLTidy (tree) {
    tidy(render(tree), options.rules, (err, msg) => {
      if (options.log === true) {
        if (err) {
          console.log(chalk.red(err))
        }
        console.log(chalk.green(msg))
      }
    })
    return tree
  }
}
