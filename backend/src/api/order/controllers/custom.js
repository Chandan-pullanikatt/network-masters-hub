'use strict';

module.exports = {
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
            const uploadService = strapi.plugin('upload').service('upload');

            // Upload expects files to be an array usually if 'files' key is used, but here we invoke it directly
            // We can use the entityService to upload linked files or the upload service directly.
            // Easiest is to plain upload then link.

            // However, simplified approach: Create entry with 'files' property if using core create?
            // Since we want custom logic, we can do it manually.

            // Let's use the core upload logic.
            // NOTE: strapi.service('plugin::upload.upload').upload({ data, files });

            // Actually, a cleaner way in Strapi v4 is to pass files in the entity creation if using the core controller,
            // but here we are custom.

            // Let's just create the order and attach the file.
            // But we need the file ID first? Or we can pass 'files.paymentScreenshot' to create?

            // Strapi Entity Service 'create' supports `files` key!
            // ref: strapi.io/documentation/developer-docs/latest/developer-resources/database-apis-reference/entity-service/create.html

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
            });

            return ctx.send({ data: entry, message: 'Order created successfully' }, 201);

        } catch (error) {
            console.error('Manual Payment Error:', error);
            return ctx.internalServerError('Failed to process manual payment');
        }
    }
};
