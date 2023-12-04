import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './DoctorViewPatientPage.module.css';

// Define types for your API response
type Measurement = {
  bpm: number;
  temperature: number;
  angle: number;
  battery: number;
  circumference: number;
  standuppercentage: number;
  measuredtime: string;
};

type PatientReportResponse = {
  patient_unique_code: number;
  patient_firstname: string;
  patient_lastname: string;
  measurements: Measurement[];
  doctor_unique_code: number;
};

const DoctorViewPatientPage = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [patientReport, setPatientReport] = useState<PatientReportResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPatientReports = async () => {
      // You would get the doctor's unique code from your auth context/state management
      const doctorUniqueCode = 2; // This is a placeholder, replace with actual code
      const patientUniqueCode = parseInt(patientId!); // Use the `patientId` from the URL

      try {
        const response = await fetch(
          `https://dcw3srhbqk.execute-api.us-east-1.amazonaws.com/user/${doctorUniqueCode}/reports?patientId=${patientUniqueCode}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PatientReportResponse = await response.json();
        setPatientReport(data);
      } catch (error) {
        console.error('Failed to fetch patient reports:', error);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchPatientReports();
    }
  }, [patientId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!patientReport) {
    return <div>No report found for this patient.</div>;
  }

  return (
    <div>
      <h1>Patient Profile</h1>
      {/* Render the fetched patient's profile UI */}
      <div className="patient-details">
        <p>Name: {patientReport.patient_firstname} {patientReport.patient_lastname}</p>
        <p>Unique Code: {patientReport.patient_unique_code}</p>
        <p>Email: {patientReport.patient_firstname.toLowerCase()}.{patientReport.patient_lastname.toLowerCase()}@example.com</p>
        <p>Gender: {/* Gender data not provided in API response */}</p>
      </div>
      {/* Additional components for Reports and Monitor Data */}
      <div className="patient-reports">
        {patientReport.measurements.map((measurement, index) => (
          <div key={index} className="report-details">
            <p>Heart Rate: {measurement.bpm} BPM</p>
            <p>Temperature: {measurement.temperature}°C</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorViewPatientPage;
