// ------------------------------------
// #POSTHTML - TIDY
// ------------------------------------

'use strict'

const chalk = require('chalk')

const tidy = require('htmltidy2').tidy

const render = require('posthtml-render')
const parser = require('posthtml-parser')

const log = function (err, msg) {
  if (err) {
    console.log(chalk.red(err))
  }
  console.log(chalk.green(msg))
}

exports = module.exports = function (options) {
  options = options || {}
  options.log = options.log || false
  options.rules = options.rules || {}

  return function PostHTMLTidy (tree) {
    return new Promise((resolve, reject) => {
      tidy(render(tree), options.rules, (err, msg) => {
        if (options.log) {
          log(err, msg)
        }

        if (err) {
          reject(err || new Error('Unknown problem in posthtml-tidy.'))
        }

        resolve(parser(msg))
      })
    })
  }
}
