const badger = require ('../../src/api/badger')

describe ('#badger', () => {
    it ('calls fetch', async done => {
        const json = jest.fn (() => Promise.resolve({}))
        const fakeFetch = jest.fn(() => Promise.resolve({ json }))

        await badger(fakeFetch) ({ presence: 0, token: '', userId: 1 })

        expect (fakeFetch).toBeCalled()
        expect (json).toBeCalled()

        done()
    })

    it ('calls fetch with the body', async done => {
        const json = jest.fn(() => Promise.resolve({}))
        const fakeFetch = jest.fn(() => Promise.resolve({ json }))

        await badger (fakeFetch) ({ presence: 0, token: 'mytoken', userId: 100 })

        expect (fakeFetch).toBeCalled()

        const options = fakeFetch.mock.calls[0][1]
        const body = JSON.parse(options.body)

        expect (body).toEqual (expect.objectContaining({
            presence: 0,
            token: 'mytoken',
            id_user: 100
        }))

        done()
    })
})