const http = require('http')

function handleRequest(req, res) {
    res.write('<html>Hello</html>')
    res.end
}

module.exports = {
    handleRequest
}