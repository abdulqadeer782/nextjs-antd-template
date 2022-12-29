/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     distDir: 'build',
//     env: {
//         APP_URL: process.env.APP_URL
//     }
// }

// module.exports = nextConfig

module.exports = withLess({
    lessLoaderOptions: {
        /* ... */
        lessOptions: {
            /* ... */
            modifyVars: {
            },
        },
    },
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'build',
    env: {
        APP_URL: process.env.APP_URL
    }
    
});