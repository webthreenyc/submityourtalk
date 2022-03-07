import { isProd } from "./utils/env";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
