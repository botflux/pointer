const host = 'http://145.239.32.254:8080'
const commandLineOptionsDefinition = [
    { name: 'presence', type: Number },
    { name: 'user', type: String },
    { name: 'password', type: String },
    { name: 'userId', type: Number }
]
 

module.exports = { host, commandLineOptionsDefinition }