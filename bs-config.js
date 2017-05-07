module.exports = {
    server: {
        baseDir: './src',
        middleware: {
            1: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
        }
    }
};