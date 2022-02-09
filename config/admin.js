module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '75f92fce851ab1b106e2d64d5007e9bc'),
  },
});
