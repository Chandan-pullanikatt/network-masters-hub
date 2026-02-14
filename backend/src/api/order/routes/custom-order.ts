export default {
    routes: [
        {
            method: "POST",
            path: "/manual-payment",
            handler: "order.createManualOrder",
            config: {
                auth: false,
            },
        },
    ],
};
