module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env('APP_KEYS') ? [env('APP_KEYS')] : ['w6vmliwodbj6lwy3m3lffhtf4w5l9c1w'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('URL', 'http://localhost:1337'),
  proxy: true
});