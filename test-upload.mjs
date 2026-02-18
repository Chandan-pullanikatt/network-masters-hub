
import { openAsBlob } from 'node:fs';

const BASE_URL = 'http://localhost:1337'; // Adjust port if needed

async function testUpload() {
    try {
        console.log("Preparing upload...");

        // Read the qrcode image as a blob
        const file = await openAsBlob('d:/work/network-masters-hub-main/frontend/public/assets/qrcode.jpeg');

        const formData = new FormData();
        formData.append('customerName', 'Test User');
        formData.append('email', 'test@example.com');
        formData.append('phone', '1234567890');
        formData.append('totalAmount', '100');
        formData.append('courses', JSON.stringify([])); // Send empty array to avoid invalid ID error
        formData.append('paymentScreenshot', file, 'qrcode.jpeg');

        console.log("Sending POST request to /api/orders/manual-payment...");
        const start = Date.now();

        const res = await fetch(`${BASE_URL}/api/orders/manual-payment`, {
            method: 'POST',
            body: formData,
        });

        const duration = Date.now() - start;
        console.log(`Request finished in ${duration}ms`);
        console.log(`Status: ${res.status} ${res.statusText}`);

        const text = await res.text();
        console.log("Response body:", text);

    } catch (error) {
        console.error("Test failed:", error);
    }
}

testUpload();
