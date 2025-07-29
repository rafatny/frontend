import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações do Next.js */
  reactStrictMode: true,

  // Permitir imagens externas
  images: {
    remotePatterns: [
      // API principal
      {
        protocol: 'https',
        hostname: 'api.raspadinhabr.online',
        port: '',
        pathname: '/uploads/**',
      },
      // Supabase CDN
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      // ImgBB - página raiz (liberar qualquer caminho)
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/**',
      },
      // ImgBB - CDN real (liberar qualquer caminho)
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Se você usa API Routes, aumentar o limite do body (caso uploads grandes)
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Ajuste o tamanho máximo
    },
  },
};

export default nextConfig;
