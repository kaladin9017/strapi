module.exports = () => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: 'postgresql://postgres:ytxMKXXygimUBmvDROAaRAxmEvxyYlCk@shinkansen.proxy.rlwy.net:50641/railway',
      ssl: {
        rejectUnauthorized: false
      }
    },
    debug: true,
    pool: { 
      min: 0, 
      max: 7,
      acquireTimeoutMillis: 60000,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100
    },
  },
}); 