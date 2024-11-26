import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript
  },
  reactStrictMode: true, // Activa el modo estricto de React
  images: {
    domains: ["res.cloudinary.com"], // Agrega el dominio permitido para las imágenes
  },
};

export default nextConfig;
