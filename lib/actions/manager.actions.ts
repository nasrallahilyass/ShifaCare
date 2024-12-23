/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { parseStringify } from "../utils";

import {
  APPOINTMENT_COLLECTION_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";

// GET ALL APPOINTMENTS
export const getAllAppointments = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!
    );

    if (appointments.documents.length > 0) {
      return parseStringify(appointments);
    } else {
      return "No appointments found";
    }
  } catch (error) {
    console.error(
      "An error occurred while retrieving all appointments:",
      error
    );
  }
};

// GET ALL PATIENTS
export const getAllPatients = async () => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!
    );

    if (patients.documents.length > 0) {
      return parseStringify(patients);
    } else {
      return "No patients found";
    }
  } catch (error) {
    console.error("An error occurred while retrieving all patients:", error);
  }
};

// GET ALL DOCTORS
export const getAllDoctors = async () => {
  try {
    const doctors = await databases.listDocuments(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!
    );

    if (doctors.documents.length > 0) {
      return parseStringify(doctors);
    } else {
      return "No doctors found";
    }
  } catch (error) {
    console.error("An error occurred while retrieving all doctors:", error);
  }
};
