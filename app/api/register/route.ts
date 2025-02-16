import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/firebase/firebase-server";
import { FieldValue } from "firebase-admin/firestore";
import { v4 as uuidv4 } from "uuid";

interface RegistrationBody {
  firstName: string;
  lastName: string;
  email: string;
  degree: string;
  branch: string;
  experienceResponse: string;
  goalsResponse: string;
  resilienceResponse: string;
}

export async function POST(req: NextRequest) {
  let body: RegistrationBody | undefined;

  try {
    const data = await req.json();
    body = data as RegistrationBody;
    const { firstName, lastName, email, degree, branch, experienceResponse, goalsResponse, resilienceResponse } = body;

    // Check for missing fields
    const missingFields = [
      !firstName && "firstName",
      !lastName && "lastName",
      !email && "email",
      !degree && "degree",
      !branch && "branch",
      !experienceResponse && "experienceResponse",
      !goalsResponse && "goalsResponse",
      !resilienceResponse && "resilienceResponse"
    ].filter(Boolean);

    if (missingFields.length > 0) {
      return NextResponse.json({ error: `Missing fields: ${missingFields.join(", ")}` }, { status: 400 });
    }

    const participantsRef = adminDb.collection("participants").doc(email);
    const registeredRef = adminDb.collection("registered").doc("emails");

    // Firestore transaction to check and update
    await adminDb.runTransaction(async (transaction) => {
      const registeredDoc = await transaction.get(registeredRef);

      const registeredEmails = registeredDoc.exists ? registeredDoc.data()?.emails || [] : [];
      if (registeredEmails.includes(email)) {
        throw new Error("You have already registered."); // Prevent duplicate registration
      }

      const id = uuidv4(); // Generate a unique UUID
      const name = firstName + ' ' + lastName;
      const department = branch
      // Create participant document
      transaction.set(participantsRef, {
        id,
        name,
        email,
        degree,
        department,
        experienceResponse,
        goalsResponse,
        resilienceResponse,
        attend: false,
        selected: false,
        certgen: false,
        emailsent: false,
        createdAt: FieldValue.serverTimestamp(),
      });

      // Update registered collection with new email
      transaction.set(
        registeredRef,
        {
          emails: FieldValue.arrayUnion(email),
        },
        { merge: true }
      );
    });

    return NextResponse.json({ success: true, participantId: uuidv4() }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "You have already registered.") {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }

      console.error("Error submitting registration", {
        error: error.message,
        stack: error.stack,
        requestData: body || 'No request data available'
      });
    } else {
      console.error("An unknown error occurred", { error });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
