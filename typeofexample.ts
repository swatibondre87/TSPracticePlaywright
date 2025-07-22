const config = {
  baseURL: "https://example.com",
  retries: 3,
};

type ConfigType = typeof config;
// Same as: { baseURL: string; retries: number; }
