import { google } from "googleapis";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, college, rating, feedback, eventName, type } = body;
    if (!feedback) {
      return new Response(JSON.stringify({ error: "Feedback is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Load service account credentials
    const keyFilePath = path.join(
      process.cwd(),
      "public",
      "gdgc-446607-c077143de594.json"
    );
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      projectId: "gdgc-446607",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1V5aBAq_q4BY5tnFrqVs9uo3fqd9vjwrUkQS6oRcVDnI";
    const range = "Sheet1!A2";

    const values = [[feedback, name, email, college, rating, eventName, type]];

    // Append data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    return new Response(
      JSON.stringify({ message: "Feedback uploaded successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error uploading feedback:", error);

    return new Response(
      JSON.stringify({ error: "Failed to upload feedback. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
