import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async process(ctx) {
        console.log("Manual controller 'process' action hit");
        ctx.send({ message: "It works with manual.ts!" });
    }
});
