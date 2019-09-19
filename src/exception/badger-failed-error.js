const { BADGER_FAILED_ERROR } = require('./constants')

/**
 * Thrown when the badger request has failed
 */
class BadgerFailedError extends Error {
    constructor (...params) {
        super(...params)

        if (Error.captureStackTrace) 
            Error.captureStackTrace (this, BadgerFailedError)

        this.name = BADGER_FAILED_ERROR
    }
}

module.exports = BadgerFailedError