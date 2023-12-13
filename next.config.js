// /**
//  * @type {import('next').NextConfig}
//  */

const isProd = process.env.NODE_ENV === 'production';


const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
    // assetPrefix: '/[lang]/',
    basePath:isProd ? '/website-nk': '',
    output: 'export',
    distDir: 'dist',
    // basePath:'',
    images: {
        unoptimized: true,
    }
});