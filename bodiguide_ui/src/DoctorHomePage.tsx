// DoctorHomePage.tsx
import React from 'react';
import styles from './DoctorHomePage.module.css'; 

type PatientInfo = {
  name: string;
  email: string;
};

const mockPatients: PatientInfo[] = [
  // This will be replaced with actual data from the backend
  { name: 'David Ross', email: 'ross29@gmail.com' },
  { name: 'Rachel Green', email: 'rachel7@gmail.com' },
  { name: 'Mridgala Bieredy', email: 'mridgalabieredy07@gmail.com' },
];

const DoctorHomePage: React.FC = () => {
  // In a real app, we would fetch this data from the backend
  const totalPatients = 10;
  const doctorName = 'Dr. Joey';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        BodiGuide Inc
        {/* Navigation links would go here */}
      </header>

      <main className={styles.mainContent}>
        <section className={styles.patientsList}>
          <h2>Patients List</h2>
          <table>
            {/* Table headers */}
            <tbody>
              {mockPatients.map(patient => (
                <tr key={patient.email}>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                  <td>View Full Details</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>View Full List</button>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.patientCount}>
            Total Number of Patients
            <span className={styles.patientNumber}>{totalPatients}</span>
          </div>
          <div className={styles.doctorProfile}>
            <div className={styles.profilePic}></div> {/* Placeholder for profile picture */}
            {doctorName}
            <button>View Profile</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DoctorHomePage;