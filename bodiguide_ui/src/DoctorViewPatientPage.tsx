import { useParams } from 'react-router-dom';
import './DoctorViewPatientPage.module.css';
const DoctorViewPatientPage = () => {
  const { patientId } = useParams();
  
  // Fetch patient details based on patientId
  // For now, we'll use a placeholder
  const patient = {
    id: patientId,
    name: 'David Ross',
    age: 21,
    email: 'ross29@gmail.com',
    gender: 'Male'
  };

  return (
    <div>
      <h1>Patient Profile</h1>
      {/* Render the patient's profile UI similar to the wireframe */}
      <div className="patient-details">
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Email: {patient.email}</p>
        <p>Gender: {patient.gender}</p>
      </div>
      {/* Additional components for Reports and Monitor Data */}
    </div>
  );
};

export default DoctorViewPatientPage;