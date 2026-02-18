/**
 * A set of functions called "actions" for `custom`
 */

import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async manualPayment(ctx) {
        try {
            const { customerName, email, phone, courses, totalAmount } = ctx.request.body;
            const { paymentScreenshot } = ctx.request.files || {};

            if (!paymentScreenshot) {
                return ctx.badRequest('Payment screenshot is required.');
            }

            // Check for required fields
            if (!customerName || !email || !phone || !courses || !totalAmount) {
                return ctx.badRequest('Missing required fields.');
            }

            // Parse courses if it's a string (e.g. from FormData)
            let courseIds = courses;
            if (typeof courses === 'string') {
                try {
                    courseIds = JSON.parse(courses);
                } catch (e) {
                    // If not JSON, maybe it's a single ID or comma-seperated? 
                    // Assuming JSON array of IDs or just array of IDs
                    courseIds = [courses];
                }
            }

            // 1. Upload the screenshot
            // The file upload is handled by Strapi's entity service if passed in 'files'

            const entry = await strapi.entityService.create('api::order.order', {
                data: {
                    customerName,
                    email,
                    phone,
                    courses: courseIds,
                    totalAmount,
                    paymentStatus: 'pending',
                    paymentMethod: 'manual',
                    publishedAt: new Date(), // Publish immediately
                },
                files: {
                    paymentScreenshot: paymentScreenshot
                }
            } as any);

            return ctx.send({ data: entry, message: 'Order created successfully' }, 201);

        } catch (error) {
            console.error('Manual Payment Error:', error);
            return ctx.internalServerError('Failed to process manual payment');
        }
    }
});
