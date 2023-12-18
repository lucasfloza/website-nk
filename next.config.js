// /**
//  * @type {import('next').NextConfig}
//  */

const isProd = process.env.NODE_ENV === 'production';


const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
    // output: 'export',
    // distDir: 'dist',
});