import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/firebase/firebase-server";

const NEWSLETTER_DOC_ID = "subscribers"; // Single document ID

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const docRef = adminDb.collection("newsletter").doc(NEWSLETTER_DOC_ID);
        const doc = await docRef.get();

        if (doc.exists) {
            // Get existing emails and add only if it's not already present
            const existingEmails: string[] = doc.data()?.emails || [];
            if (!existingEmails.includes(email)) {
                await docRef.update({ emails: [...existingEmails, email] });
            }
        } else {
            // Create the document with the first email in an array
            await docRef.set({ emails: [email] });
        }

        return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
