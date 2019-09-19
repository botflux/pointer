const fetch = require('node-fetch')
const login = require('./api/login')
const badger = require('./api/badger')

const commandLineArgs = require('command-line-args')
const app = require('./src/app')
const { commandLineOptionsDefinition } = require('./src/constants')

const options = commandLineArgs(commandLineOptionsDefinition)

app(login (fetch), badger (fetch)) (options)
    .then (state => { console.log(state) })