const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware('/socket.io', {
        target: 'ws://localhost:3001',
        ws: true
    }))
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:3001'
    }))
}