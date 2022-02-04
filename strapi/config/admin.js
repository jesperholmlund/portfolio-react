module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63bff7dcead6c8ed71d4ad33548a4c47'),
  },
});
