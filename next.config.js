/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.ibb.co"] 
  }
}

module.exports = nextConfig



// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }