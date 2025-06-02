/** @type {import('next').NextConfig} */
const nextConfig = {
  // 添加 transpilePackages 来解决 framer-motion 的问题
  transpilePackages: ["framer-motion"],
  // 确保 React 严格模式已禁用，以避免开发环境中的重复动画
  reactStrictMode: false,
};

export default nextConfig;
