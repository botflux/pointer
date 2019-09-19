const { host } = require ('../constants')

/**
 * Makes the login function
 * 
 * @param {Function} fetch 
 */
const login = fetch => ({ user, password }) => {
    return fetch(`${host}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            action: 'tryConnect',
            password,
            userMail: user,
            token: null
        })
    })
    .then(response => response.json())
}

module.exports = login