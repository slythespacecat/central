'use strict';

/**
 * ticker controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ticker.ticker');
