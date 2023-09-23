import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import App from './App';


function ModalSection(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedMedName, setUpdatedMedName] = useState('')
  const [updatedDose, setUpdatedDose] = useState('')
  const [updatedInstructions, setUpdatedInstructions] = useState('')
  
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update this Medication
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update this Medication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updateForm.ControlInput1">
              <Form.Label>Updated Medication Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="medication name"
                onChange={(e) => setUpdatedMedName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateForm.ControlInput2">
              <Form.Label>Updated Medication Dosage</Form.Label>
              <Form.Control
                type="text"
                placeholder="new dosage"
                autoFocus
                onChange={(e) => setUpdatedDose(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateForm.ControlInput3">
              <Form.Label>Updated Medication Instructions</Form.Label>
              <Form.Control
                type="text"
                placeholder="new instructions"
                autoFocus
                onChange={(e) => setUpdatedInstructions(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalSection;
  

//  <div>
//          <form>
//            <h3>Update this Med</h3>
//            <label>Update Name</label>
//            <input
//              onChange={(e) => setUpdatedMedName(e.target.value)}
//            ></input>
//            <br></br>
//            <label>Update Dosage</label>
//            <input
//              onChange={(e) => setUpdatedDose(e.target.value)}
//            ></input>
//            <br></br>
//            <label>Update Instructions</label>
//            <input
//              onChange={(e) => setUpdatedInstructions(e.target.value)}
//            ></input>
//             <br></br>
//             <button onClick={(e) => updateMed(e, med)}>Update</button>
//           </form>
//         </div>

