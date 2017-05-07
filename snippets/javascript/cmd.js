#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const args = process.argv.slice(2);

function run(command, fn) {
  return new Promise(function(resolve, reject) {
    exec(command, function(err, result) {
      if (err) reject(err);
      return resolve(fn ? fn(result) : result)
    });
  });
}

(async function main() {
  |
})();
