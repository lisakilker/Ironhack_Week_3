var fs = require('fs');

var fileActions = require('./gotcb.js')

fs.readFile("./got.json", 'utf8', fileActions);