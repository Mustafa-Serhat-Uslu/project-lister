const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./data/**"],
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
