const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/projects",
      permanent: false,
    },
  ],
};

export default nextConfig;
