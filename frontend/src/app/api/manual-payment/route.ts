import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

        // Using native fetch in Node 18+ (Next.js 13+) handles FormData boundaries automatically.
        // We cast to any to allow 'duplex' option which is required for streaming bodies in some environments.
        const res = await fetch(`${strapiUrl}/api/manual-payment`, {
            method: 'POST',
            body: formData,
            duplex: 'half'
        } as any);

        if (!res.ok) {
            const errorText = await res.text();
            let error;
            try {
                error = JSON.parse(errorText);
            } catch {
                error = { error: errorText };
            }
            console.error('Strapi Error:', error);
            return NextResponse.json(error, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Manual Payment Proxy Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
