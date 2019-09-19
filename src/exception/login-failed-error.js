const { LOGIN_FAILED_ERROR } = require('./constants')

/**
 * Thrown when the login request has failed
 */
class LoginFailedError extends Error {
    constructor (...params) {

        super(...params)
        
        if (Error.captureStackTrace) 
            Error.captureStackTrace(this, LoginFailedError)

        this.name = LOGIN_FAILED_ERROR
    }
}

module.exports = LoginFailedError