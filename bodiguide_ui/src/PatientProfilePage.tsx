// PatientProfilePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PatientProfilePage.module.css'; // Ensure to create a corresponding CSS module file

const PatientProfilePage: React.FC = () => {
  // Placeholder for patient data - replace with real data from backend
  const patientDetails = {
    name: 'Alex Bing',
    mobileNumber: '1234567890',
    email: 'alexbing@example.com',
    dob: '01/29/1998',
    gender: 'Male',
    address: 'Columbia, Missouri'
  };

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
          <h1>{patientDetails.name}</h1>
          <p>Mobile Number: {patientDetails.mobileNumber}</p>
          <p>Email: {patientDetails.email}</p>
          <p>Date of Birth: {patientDetails.dob}</p>
          <p>Gender: {patientDetails.gender}</p>
          <p>Address: {patientDetails.address}</p>
        </div>
      </main>
    </div>
  );
};

export default PatientProfilePage;