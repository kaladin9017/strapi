module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'development-jwt-secret-for-users-permissions'),
    },
  },
}); 