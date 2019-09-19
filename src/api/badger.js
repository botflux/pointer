const { host } = require('../constants')

/**
 * Makes the badger function
 * 
 * @param {Function} fetch 
 */
const badger = fetch => ({ presence, token, userId }) => {

    const defaultPayload = { action: 'setPresence' }

    return fetch (`${host}/badger`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ...defaultPayload, id_user: userId, presence, token })
    }).then (response => response.json())
}

module.exports = badger