export default {
    routes: [
        {
            method: "POST",
            path: "/manual-payment",
            handler: "custom.manualPayment",
            config: {
                auth: false,
            },
        },
    ],
};
