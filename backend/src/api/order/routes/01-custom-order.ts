console.log("[DEBUG] Loading custom manual-payment route...");

export default {
    routes: [
        {
            method: "POST",
            path: "/manual-payment",
            handler: "api::order.manual.process",
            config: {
                auth: false,
            },
        },
    ],
};
