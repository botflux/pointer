const fetch = require('node-fetch')
const login = require('./api/login')
const badger = require('./api/badger')

const commandLineArgs = require('command-line-args')
const app = require('./src/app')
const { commandLineOptionsDefinition } = require('./src/constants')

const options = commandLineArgs(commandLineOptionsDefinition)

const login = login (fetch) 
const badger = badger (fetch)

app(login, badger) (options)
    .then (state => { console.log(state) })
    .catch (error => console.log(error))