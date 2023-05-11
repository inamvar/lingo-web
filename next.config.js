//NODE_TLS_REJECT_UNAUTHORIZED='0'
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    }
};
module.exports=nextConfig;