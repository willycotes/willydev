const browserSync = require('browser-sync').create();

browserSync.init({
  https: {
    key: 'C:/certs-SSL/localhost.key',
    cert: 'C:/certs-SSL/localhost.crt',
  },
  notify: false,
  ui: false,
  injectChanges: true,
  proxy: {
    // target: process.env.WP_SITEURL,
    target: 'https://local.brandketings.com',
  },
  host: '127.0.0.1',
  port: 9000,
  files: ['**/*.php', '**/*.scss', '**/*.js'],
});
