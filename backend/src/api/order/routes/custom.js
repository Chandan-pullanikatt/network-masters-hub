module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/orders/manual-payment',
            handler: 'custom.manualPayment',
            config: {
                auth: false, // Guest checkout allowed
            },
        },
    ],
};
