/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
require("dotenv").config();
module.exports = {
  reactStrictMode: true,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
