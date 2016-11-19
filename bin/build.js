const fs = require('fs')
const path = require('path')
const find = require('find')

const source = './snippets'
const result = {}

function basename(p) {
  return path.basename(p).split('.')[0]
}

function readFile(file) {
  return fs.readFileSync(file, 'utf8')
}

find.dirSync(source)
  .forEach(dir => {
    let block = result[basename(dir)] = {
      snippets: {}
    }
    find.fileSync(dir).forEach(file => {
      block.snippets[basename(file)] = readFile(file)
    })
  })

console.log(
  JSON.stringify(result, null, 2)
)
