const login = require('./api/login')
const badger = require('./api/badger')

const app = fetch => async ({ presence, user, password, userId }) => {

    const credentials = { user, password }
    const loginResponse = await login (fetch) (credentials)

    if (!loginResponse.success) {
        console.log('Login failed')
        return 1
    }

    const badgerResponse = await badger(fetch) ({ presence, token: loginResponse.token, userId })

    if (!badgerResponse.success) {
        console.log('Badger failed')
        return 2
    }

    console.log(badgerResponse)
    return 0
}

module.exports = app