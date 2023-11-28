import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import styles from './PatientHomePage.module.css';

const PatientHomePage: React.FC = () => {
  const patientProfile = {
    name: 'Alex Bing',
    age: 25,
    email: 'alexbing@example.com',
    gender: 'Male'
  };

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
          <h3>{patientProfile.name}</h3>
          <p>Age: {patientProfile.age}</p>
          <p>Email ID: {patientProfile.email}</p>
          <p>Gender: {patientProfile.gender}</p>
          <Link to="/patient-profile" className={styles.viewProfileLink}>View Profile</Link> {/* Link to the PatientProfilePage */}
        </aside>
      </main>
    </div>
  );
};

export default PatientHomePage;