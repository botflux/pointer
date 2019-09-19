const BadgerFailedError = require ('./exception/badger-failed-error')
const LoginFailedError = require ('./exception/login-failed-error')

/**
 * Authenticate and badge a given user
 * 
 * @param {Function} login 
 * @param {Function} badger 
 */
const app = (login, badger) => async ({ presence, user, password, userId }) => {

    const credentials = { user, password }
    const loginResponse = await login (credentials)

    if (!loginResponse.success) {
        throw new LoginFailedError ('Login has failed')
    }

    const badgerResponse = await badger ({ presence, token: loginResponse.token, userId })

    if (!badgerResponse.success) {
        throw new BadgerFailedError ('Badger has failed')
    }
}

module.exports = app