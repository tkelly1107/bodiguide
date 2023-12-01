import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './PatientHomePage.module.css';

// Define an interface for the expected shape of patientDetails
interface PatientDetails {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  gender: string;
}

const PatientHomePage: React.FC = () => {
  // State to hold patient details
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Replace with the actual user ID you want to fetch
  const userId = 1; // Assuming '1' is the unique_id for the customer

  // Effect to fetch patient data on mount
  useEffect(() => {
    // Update the URL with the actual endpoint provided by your backend
    const endpoint = `https://vfqd51syg4.execute-api.us-east-1.amazonaws.com/prod/user/${userId}`;
    
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(endpoint);
        setPatientDetails(response.data); // Make sure the data shape matches the PatientDetails interface
      } catch (err) {
        setError('Failed to load patient details');
        console.error('Error fetching patient details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [userId]);

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!patientDetails) return <div>No patient details available.</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        BodiGuide Inc
        {/* Navigation links would go here */}
      </header>

      <main className={styles.mainContent}>
        <section className={styles.card}>
          <img src="/images/reports.png" alt="Reports" className={styles.cardImage} />
          <h3>Reports</h3>
          {/* Link or button to view reports */}
        </section>

        <section className={styles.card}>
          <img src="/images/monitor.jpg" alt="Monitor Data" className={styles.cardImage} />
          <h3>Monitor Data</h3>
          {/* Link or button to view monitor data */}
        </section>

        <aside className={styles.profile}>
          <div className={styles.profilePic}></div> {/* Placeholder for profile picture */}
          <h3>{patientDetails.firstname} {patientDetails.lastname}</h3>
          <p>Age: {patientDetails.age}</p>
          <p>Email ID: {patientDetails.email}</p>
          <p>Gender: {patientDetails.gender}</p>
          <Link to="/patient-profile" className={styles.viewProfileLink}>View Profile</Link>
        </aside>
      </main>
    </div>
  );
};

export default PatientHomePage;
