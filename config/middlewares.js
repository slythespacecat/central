module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://central.lightsoket.com', 'cdn.jsdelivr.net', 'strapi.io', 'https://storage.googleapis.com/lightsoket-test/', 'https://storage.googleapis.com/lightsoket-central/', 'https://storage.googleapis.com/lightsoket_central/']
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];

