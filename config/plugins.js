const fs = require('fs');
require('dotenv').config();
const path = require('path');

module.exports = ({ env }) => {

const base64EncodedServiceAccount = env('B64_GOOGLE_CLOUD_STORAGE');
const decodedServiceAccount = Buffer.from(
  base64EncodedServiceAccount,
  "base64",
).toString("utf-8");
const credentials = JSON.parse(decodedServiceAccount);

  return {
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
          bucketName: env('GOOGLE_CLOUD_STORAGE_BUCKET_NAME'),
          publicFiles: true,
          uniform: true,
          serviceAccount: credentials,
          baseUrl: `https://storage.googleapis.com/${env('GOOGLE_CLOUD_STORAGE_BUCKET_NAME')}`,
          basePath: '',
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.hostinger.com',
          port: 465,
          secure: true,
          auth: {
            user: env('EMAIL_ADDRESS'),
            pass: env('EMAIL_PASSWORD'),
          },
          tls: {
            ciphers: 'SSLv3',
          },
          requireTLS: true,
          debug: true,
        },
        settings: {
          defaultFrom: env('EMAIL_ADDRESS'),
          defaultReplyTo: env('EMAIL_ADDRESS'),
        },
      },
    },
    // ...
  };
};
