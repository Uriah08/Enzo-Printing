import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const { feedback } = await req.json()

        if(!feedback) {
            return NextResponse.json(
                { message: 'Feedback is required' },
                { status: 400 }
            );
        }

        await db.feedback.create({
            data: {
                message: feedback,
            }
        });

        return NextResponse.json(
            { message: 'Feedback submitted successfully' },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const feedback = await db.feedback.findMany()

        return NextResponse.json(feedback, { status: 200 });
    }catch(error) {
        return NextResponse.json(
            { message: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}

