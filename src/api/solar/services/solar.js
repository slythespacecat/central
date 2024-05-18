'use strict';

/**
 * solar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::solar.solar');
