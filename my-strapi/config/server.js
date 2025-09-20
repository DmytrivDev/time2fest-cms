module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://time2fest.com/api'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
