/* eslint-disable @typescript-eslint/no-unused-vars */

import * as sdk from "node-appwrite";

// Destructure environment variables for configuring Appwrite
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

// Configure the Appwrite client with endpoint, project, and API key
// (The "!" tells TypeScript that these values are non-nullable)
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

// Initialize the appwrite service
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const functions = new sdk.Functions(client);
export const users = new sdk.Users(client);

