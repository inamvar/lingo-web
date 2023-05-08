NODE_TLS_REJECT_UNAUTHORIZED='0'
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '7663',
            },
        ],
    },
}