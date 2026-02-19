export default {
    routes: [
        {
            method: "POST",
            path: "/orders/manual-payment",
            handler: "api::order.order.createManualOrder",
            config: {
                auth: false,
            },
        },
    ],
};
