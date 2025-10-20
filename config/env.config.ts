// config/env.config.ts
export const ENV = {
  prod: {
    baseUrl: 'https://awesomeqa.com/ui/',
    timeout: 10000,
  },
  stage: {
    baseUrl: 'https://awesomeqa.com/ui/',
    timeout: 15000,
  },
  dev: {
    baseUrl: 'https://awesomeqa.com/ui/',
    timeout: 20000,
  },
};

// helper to select environment (default = dev)
export const getEnvConfig = () => {
  const env = process.env.TEST_ENV || 'dev';
  return ENV[env];
};
