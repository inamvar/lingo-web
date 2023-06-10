// const withPWA = require("next-pwa");

//NODE_TLS_REJECT_UNAUTHORIZED='0'
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const withPWA = require('next-pwa')({ dest: 'public' });

// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "**",
//             },
//         ],
//     }
// };

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    }
});

// module.exports=withPWA(nextConfig);