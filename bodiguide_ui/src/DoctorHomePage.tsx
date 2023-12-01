import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DoctorHomePage.module.css'; 

// Define an interface for the expected shape of doctorDetails
interface DoctorDetails {
  unique_code: number;
  firstname: string;
  lastname: string;
  usertype: string;
  patients: Array<{
    unique_code: number;
    firstname: string;
    lastname: string;
  }>;
}

const DoctorHomePage: React.FC = () => {
  // State to hold doctor details
  const [doctorDetails, setDoctorDetails] = useState<DoctorDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Replace with your actual doctor's unique code
  const doctorUniqueCode = 2;
  const doctorApiUrl = `https://dcw3srhbqk.execute-api.us-east-1.amazonaws.com/user/${doctorUniqueCode}`;

  useEffect(() => {
    axios.get(doctorApiUrl)
      .then(response => {
        // Ensure the response is in the expected format with type assertion
        const details = response.data as DoctorDetails;
        if (details && details.usertype === 'doctor') {
          setDoctorDetails(details);
        } else {
          setError('No doctor data found');
        }
      })
      .catch(error => {
        console.error('Error fetching doctor details:', error);
        setError('Failed to load doctor details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [doctorUniqueCode]); // useEffect dependency array

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!doctorDetails) return <div>No doctor details available.</div>;

  // Extract the doctor's name and patient list
  const doctorName = `${doctorDetails.firstname} ${doctorDetails.lastname}`;
  const patients = doctorDetails.patients;

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
            <tbody>
              {patients.map(patient => (
                <tr key={patient.unique_code}>
                  <td>{`${patient.firstname} ${patient.lastname}`}</td>
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
            <span className={styles.patientNumber}>{patients.length}</span>
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
