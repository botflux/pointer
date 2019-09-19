const app = require('../../src/app')
const { LOGIN_FAILED_ERROR, BADGER_FAILED_ERROR } = require ('../../src/exception/constants')

describe ('#app', () => {
    it ('calls api', async () => {
        const fakeLogin = jest.fn (() => Promise.resolve({ success: true, token: 'abc' }))
        const fakeBadger = jest.fn (() => Promise.resolve({ success: true }))

        await app (fakeLogin, fakeBadger) ({ presence: 0, user: 'user@email.com', password: 'password', userId: 100 })

        // Tests if fake login is called correctly
        expect (fakeLogin).toBeCalled ()

        const fakeLoginOptions = fakeLogin.mock.calls[0][0]

        expect(fakeLoginOptions).toEqual(expect.objectContaining ({
            user: 'user@email.com',
            password: 'password'
        }))

        const fakeBadgerOptions = fakeBadger.mock.calls[0][0]

        expect(fakeBadgerOptions).toEqual(expect.objectContaining ({
            presence: 0,
            token: 'abc',
            userId: 100
        }))
    })

    it ('throws a login failed error when login failed', async () => {
        const fakeLogin = jest.fn (() => Promise.resolve({ success: false }))
        
        const startApp = async () => await app (fakeLogin, () => {}) ({ presence: 0, user: 'user@email.com', password: 'password', userId: 47 })

        expect (startApp()).rejects.toEqual (expect.objectContaining({
            name: LOGIN_FAILED_ERROR
        }))
    })

    it ('throws a badger failed error when login failed', async () => {
        const fakeLogin = () => Promise.resolve({ success: true })
        const fakeBadger = jest.fn (() => Promise.resolve({ success: false }))

        const startApp = async () => await app (fakeLogin, fakeBadger) ({ presence: 0, user: 'user@email.com', password: 'password', userId: 487 })

        expect (startApp()).rejects.toEqual (expect.objectContaining({
            name: BADGER_FAILED_ERROR
        }))
    })
})