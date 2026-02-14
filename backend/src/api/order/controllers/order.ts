/**
 * order controller
 */

import { factories } from '@strapi/strapi';
const utils = require('@strapi/utils');
const { parseMultipartData } = utils;

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
    async createManualOrder(ctx: any) {
        try {
            let data, files;
            if (ctx.is('multipart')) {
                const parsed = parseMultipartData(ctx);
                data = parsed.data;
                files = parsed.files;
            } else {
                return ctx.badRequest('Multipart expected');
            }

            // Basic Validation
            if (!files || !files.paymentScreenshot) {
                return ctx.badRequest('Payment screenshot is required');
            }

            // Enforce status and method
            data.paymentStatus = 'pending';
            data.paymentMethod = 'manual';

            // Create Order
            const entity = await strapi.service('api::order.order').create({
                data,
                files
            });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return this.transformResponse(sanitizedEntity);

        } catch (err) {
            ctx.body = err;
            ctx.status = 500;
        }
    }
}));
