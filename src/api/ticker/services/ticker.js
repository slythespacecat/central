'use strict';

/**
 * ticker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticker.ticker');
