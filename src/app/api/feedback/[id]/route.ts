import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const deletedFeedback = await db.feedback.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "Feedback deleted successfully", deletedFeedback },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting feedback:", error);
        return NextResponse.json(
            { message: "Failed to delete feedback" },
            { status: 500 }
        );
    }
}