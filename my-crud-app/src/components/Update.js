import React, { useState, useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';




const Update = () => {
    let navigate = useNavigate();
    const [medicationName, setMedicationName] = useState('');
    const [medicationDosage, setMedicationDosage] = useState('');
    const [medicationInstructions, setMedicationInstructions] = useState('');
    const [id, setID] = useState(null);
    const updateData = () => {
        axios.put(`https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList/${id}`, {
            medicationName,
            medicationDosage,
            medicationInstructions
        }).then(() => {
            navigate('/')
        })
    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setMedicationName(localStorage.getItem('Medication Name'));
        setMedicationDosage(localStorage.getItem('Medication Dosage'));
        setMedicationInstructions(localStorage.getItem('Medication Instructions'))
}, []);

    return(
<>
      <FloatingLabel controlId="floatingInput" label="Medication Name" className="mb-3">
        <Form.Control type="text" placeholder="medication name" value={medicationName} onChange={(e) => setMedicationName(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Medication Dosage" className="mb-3">
        <Form.Control type="text" placeholder="medication dosage" value={medicationDosage} onChange={(e) => setMedicationDosage(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Medication Instructions" className="mb-3">
        <Form.Control type="text" placeholder="medication instructions" value={medicationInstructions} onChange={(e) => setMedicationInstructions(e.target.value)} />
      </FloatingLabel>
      <Button onClick={updateData} variant="primary">Update Medication</Button>
</>
    )}

export default Update;