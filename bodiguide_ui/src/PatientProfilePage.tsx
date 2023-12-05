import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './PatientProfilePage.module.css';


// Define an interface for the expected shape of patientDetails
interface PatientDetails {
  unique_code: number;
  firstname: string;
  lastname: string;
  usertype: string;
  gender: string;
  dob: string;       // Date of birth
  email: string;
  // include other properties as needed
}

// In the component, use the interface to type the state


const PatientProfilePage: React.FC = () => {
  // State to hold patient details
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Replace with the actual user ID you want to fetch
  const userId = 1;

  // Effect to fetch patient data on mount
  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`https://vfqd51syg4.execute-api.us-east-1.amazonaws.com/prod/user/${userId}`);
        setPatientDetails(response.data);
      } catch (err) {
        setError('Failed to load patient details');
        console.error('Error fetching patient details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [userId]); // useEffect will run when the userId changes

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!patientDetails) return <div>No patient details available.</div>;

  // Render patient details
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {/* Sidebar content here */}
        <ul>
          <li><Link to="/patient-home">Home</Link></li>
          <li>Monitor Data</li>
          <li>View your Reports</li>
          <li>Profile</li>
          <li>About</li>
          <li>Logout</li>
        </ul>
      </aside>
      
      <main className={styles.mainContent}>
        <div className={styles.profileCard}>
          <div className={styles.profileImage}></div> {/* Placeholder for the profile image */}
          <h1 className={styles.name}>{patientDetails?.firstname} {patientDetails?.lastname}</h1>
          <p>Email: {patientDetails?.email}</p>
          <p>Gender: {patientDetails?.gender}</p>
          <p>Date of Birth: {patientDetails?.dob}</p>
        </div>
      </main>
    </div>
  );
};

export default PatientProfilePage;
