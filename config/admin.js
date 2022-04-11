module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e08ec24adfcdb3ab54f985b10c0cbcaf'),
  },
});
