const crypto = require('crypto');

const keys = [
    'APP_KEYS',
    'API_TOKEN_SALT',
    'ADMIN_JWT_SECRET',
    'TRANSFER_TOKEN_SALT',
    'JWT_SECRET',
    'ENCRYPTION_KEY'
];

keys.forEach(key => {
    if (key === 'APP_KEYS') {
        const key1 = crypto.randomBytes(16).toString('base64');
        const key2 = crypto.randomBytes(16).toString('base64');
        console.log(`${key}=${key1},${key2}`);
    } else {
        console.log(`${key}=${crypto.randomBytes(16).toString('base64')}`);
    }
});
