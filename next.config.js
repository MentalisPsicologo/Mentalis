/** @type {import('next').NextConfig} */
const nextConfig = {
   // Esta parte de acá permite usar la etiqueta Image
   images: {
      domains: ["i.pinimg.com", "res.cloudinary.com"],
   },
};

module.exports = {
   ...nextConfig,
   async headers() {
      return [
         {
            // Matching all API routes
            source: "/api/:path*",
            headers: [
               { key: "Access-Control-Allow-Credentials", value: "true" },
               { key: "Access-Control-Allow-Origin", value: "*" },
               {
                  key: "Access-Control-Allow-Methods",
                  value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
               },
               {
                  key: "Access-Control-Allow-Headers",
                  value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
               },
            ],
         },
      ];
   },
};
