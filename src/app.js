const login = require('./api/login')
const badger = require('./api/badger')

const BadgerFailedError = require ('./exception/badger-failed-error')
const LoginFailedError = require ('./exception/login-failed-error')

const app = fetch => async ({ presence, user, password, userId }) => {

    const credentials = { user, password }
    const loginResponse = await login (fetch) (credentials)

    if (!loginResponse.success) {
        throw new LoginFailedError ('Login has failed')
    }

    const badgerResponse = await badger(fetch) ({ presence, token: loginResponse.token, userId })

    if (!badgerResponse.success) {
        throw new BadgerFailedError ('Badger has failed')
    }

    console.log(badgerResponse)
    return 0
}

module.exports = app