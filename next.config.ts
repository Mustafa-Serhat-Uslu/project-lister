const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/projects",
      permanent: false,
    },
  ],
};

export default nextConfig;
