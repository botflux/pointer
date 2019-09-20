const fetch = require('node-fetch')
const commandLineArgs = require('command-line-args')
const makeLogin = require('./src/api/login')
const makeBadger = require('./src/api/badger')
const app = require('./src/app')

const { commandLineOptionsDefinition } = require('./src/constants')
const options = commandLineArgs(commandLineOptionsDefinition)

const login = makeLogin (fetch) 
const badger = makeBadger (fetch)

app(login, badger) (options)
    .then (() => console.log('Successfully badged'))
    .catch (error => console.log(error))