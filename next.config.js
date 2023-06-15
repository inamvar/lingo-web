process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//const withPWA = require('next-pwa')({ dest: 'public' });
const nextConfig={
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    devIndicators:{
        autoPrerender:false
    }
};
module.exports=nextConfig;
// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//     },
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "**",
//             },
//         ],
//     },
//     devIndicators:{
//         autoPrerender:false
//     }
// });

