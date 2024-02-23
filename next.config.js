/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    'process.env.BACKEND_URL': prod ? '/tnct_sc_gakkaten.github.io' : 'o',
}

module.exports = nextConfig
