import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';




const Create = () => {
    let navigate = useNavigate();
    const [medicationName, setMedicationName] = useState('');
    const [medicationDosage, setMedicationDosage] = useState('');
    const [medicationInstructions, setMedicationInstructions] = useState('');
    const postData = () => {
        axios.post(`https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList`, {
            medicationName,
            medicationDosage,
            medicationInstructions
        }).then(() => {
            navigate('/')
        })
    }
   

    return(
<>
      <FloatingLabel controlId="floatingInput" label="Medication Name" className="mb-3">
        <Form.Control type="text" placeholder="medication name" onChange={(e) => setMedicationName(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Medication Dosage" className="mb-3">
        <Form.Control type="text" placeholder="medication dosage" onChange={(e) => setMedicationDosage(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Medication Instructions" className="mb-3">
        <Form.Control type="text" placeholder="medication instructions" onChange={(e) => setMedicationInstructions(e.target.value)} />
      </FloatingLabel>
      <Button onClick={postData} variant="primary">Add New Medication</Button>
</>
    )}

export default Create;