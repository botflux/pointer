const login = require ('../../src/api/login')

describe ('#login', () => {
    it ('calls fetch', async done => {
        const json = jest.fn(() => Promise.resolve({}))

        const fakeFetch = jest.fn(() => Promise.resolve({
            json
        }))

        await login (fakeFetch) ({ user: '', password: '' })

        expect (fakeFetch).toBeCalled()
        expect (json).toBeCalled()

        done()
    })

    it ('calls fetch my the body', async done => {
        const json = jest.fn(() => Promise.resolve({}))
        const fakeFetch = jest.fn(() => Promise.resolve({ json }))

        await login (fakeFetch) ({ user: 'user@email.fr', password: 'password' })

        expect (fakeFetch).toBeCalled()

        const options = fakeFetch.mock.calls[0][1]
        const body = JSON.parse(options.body)

        expect (body).toEqual (expect.objectContaining ({
            password: expect.stringContaining('password'),
            userMail: expect.stringContaining('user@email.fr')
        }))
        
        done()
    })
})