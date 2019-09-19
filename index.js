const fetch = require('node-fetch')
const commandLineArgs = require('command-line-args')
const app = require('./src/app')
const { commandLineOptionsDefinition } = require('./src/constants')

const options = commandLineArgs(commandLineOptionsDefinition)

app(fetch) (options)
    .then (state => { console.log(state) })