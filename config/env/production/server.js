module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  app: {
    keys: env('APP_KEYS') ? [env('APP_KEYS')] : ['w6vmliwodbj6lwy3m3lffhtf4w5l9c1w'],
  },
  webhooks: {
    populateRelations: false,
  },
  url: 'https://strapi-production-901a.up.railway.app',
  proxy: true,
  cors: {
    enabled: true,
    origin: ['*']
  }
}); 