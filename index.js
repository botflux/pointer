const fetch = require('node-fetch')
const commandLineArgs = require('command-line-args')
const login = require('./api/login')
const badger = require('./api/badger')
const app = require('./src/app')

const { commandLineOptionsDefinition } = require('./src/constants')
const options = commandLineArgs(commandLineOptionsDefinition)

const login = login (fetch) 
const badger = badger (fetch)

app(login, badger) (options)
    .then (() => console.log('Successfully badged'))
    .catch (error => console.log(error))