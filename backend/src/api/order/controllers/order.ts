/**
 * order controller
 */

import { factories } from '@strapi/strapi';
const utils = require('@strapi/utils');
const { parseMultipartData } = utils;

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
    async createManualOrder(ctx: any) {
        try {
            console.log("Starting createManualOrder");

            // 1. Check Multipart
            if (!ctx.is('multipart')) {
                return ctx.badRequest('Multipart expected');
            }

            // 2. Extract Data & Files directly from koa-body parser
            // Strapi middleware populates ctx.request.body and ctx.request.files
            // We use this instead of parseMultipartData because the frontend sends flat fields,
            // not the Strapi 'data' JSON string convention.
            const { body, files } = ctx.request;

            console.log("Request Body:", JSON.stringify(body, null, 2));
            console.log("Request Files Keys:", files ? Object.keys(files) : "No files");

            if (!files || !files.paymentScreenshot) {
                console.error("Missing payment screenshot");
                return ctx.badRequest('Payment screenshot is required');
            }

            // 3. Construct the payload
            const { customerName, email, phone, totalAmount, courses } = body;

            // Parse courses if it's a string
            let parsedCourses = courses;
            if (typeof courses === 'string') {
                try {
                    parsedCourses = JSON.parse(courses);
                } catch (e) {
                    console.error("Error parsing courses JSON:", e);
                    return ctx.badRequest('Invalid courses format');
                }
            }

            const orderData = {
                customerName,
                email,
                phone,
                totalAmount,
                courses: parsedCourses,
                paymentStatus: 'pending',
                paymentMethod: 'manual',
                // Make sure to publish immediately if using draft/publish
                publishedAt: new Date(),
            };

            console.log("Creating order with data:", JSON.stringify(orderData, null, 2));

            // 4. Create Order using the Core Service
            // This service automatically handles file uploads if 'files' is passed correctly.
            const entity = await strapi.service('api::order.order').create({
                data: orderData,
                files: {
                    paymentScreenshot: files.paymentScreenshot
                }
            });

            console.log("Order created successfully:", entity.id);

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return this.transformResponse(sanitizedEntity);

        } catch (err: any) {
            console.error("Error in createManualOrder:", err);
            // detailed logging
            if (err.details) {
                console.error("Error Details:", JSON.stringify(err.details, null, 2));
            }
            ctx.body = { error: err.message || "Internal Server Error", details: err.details };
            ctx.status = 500;
        }
    }
}));
