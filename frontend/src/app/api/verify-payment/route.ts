import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = await req.json();

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database update logic here (e.g., save order to Strapi)

            return NextResponse.json({ message: 'Payment verified successfully' });
        } else {
            return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error verifying payment' }, { status: 500 });
    }
}
