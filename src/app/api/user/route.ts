import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const user = await db.user.findFirst()

        if(!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: `Internal Server Error: ${error}` }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { id, name, password } = await req.json();
        const user = await db.user.update({
            where: { id },
            data: {
                name,
                password,
            },
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: `Failed to update user: ${error}` }, { status: 500 });
    }
}