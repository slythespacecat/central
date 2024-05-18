'use strict';

/**
 * solar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::solar.solar');
