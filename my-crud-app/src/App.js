import { useState, useEffect } from 'react'
import './App.css'
import Hero from './Hero'
import ModalSection from './ModalSection'


// declaring variables
function App(props) {
  const API_URL = 'https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList'
  const [meds, setMeds] = useState([])
  const [newMedName, setNewMedName] = useState('')
  const [newMedDose, setNewMedDose] = useState('')
  const [newMedInstructions, setNewMedInstructions] =useState('')
  const [updatedMedName, setUpdatedMedName] = useState('')
  const [updatedDose, setUpdatedDose] = useState('')
  const [updatedInstructions, setUpdatedInstructions] = useState('')

 
  
  useEffect(()=>{ 
    getMeds()
  }, [])
// function to get the medication data from the API and return the data in json format
  function getMeds(){
  fetch(API_URL)
    .then((data) => data.json())
    .then((data) => {
    setMeds(data)
    console.log(data)
  })
}
  
  // function to delete a medication by it's ID and re-rendering getMeds
  function deleteMed(id){
    fetch(`${API_URL}/${id}`,{
  method:"DELETE",
      })
      .then(()=>getMeds())
      }
// function to post new medication to the list and re-rendering
  function postNewMed(e){
    e.preventDefault()
    fetch(API_URL,{
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: newMedName,
      Dose: newMedDose,
      Instructions: newMedInstructions
  }),
  }).then(()=>getMeds())
  }
  //function to edit an existing medication
  function updateMed(e,MedObject){
    e.preventDefault()
    let updatedMedObject = {
      ...MedObject,
      name: updatedMedName,
      Dose: updatedDose,
      Instructions: updatedInstructions
    }

    fetch(`${API_URL}/${MedObject.id}`,{
    method: "PUT",
    body: JSON.stringify(updatedMedObject),
    headers: {"Content-Type": "application/json"}
  }).then(()=>getMeds())
  }

  return (
    <div className="App">
      <Hero/>
{/* <form>
  <h3>Post new Med </h3>
  <label>Name</label>
  <input onChange= {(e)=>setNewMedName(e.target.value)}></input>
  <label>Dosage</label>
  <input onChange= {(e)=>setNewMedDose(e.target.value)}></input><br></br>
  <label>Instructions</label>
  <input onChange={(e)=>setNewMedInstructions(e.target.value)}></input><br></br>
  <button onClick={(e)=>postNewMed(e)}>Submit</button>
</form> */}
{/* bootstrap form to add new medication */}
<div className="form-floating mb-3">
  <input onChange= {(e)=>setNewMedName(e.target.value)} 
    type="text" className="form-control" 
    id="floatingInput" placeholder="Medication Name">
  </input>
  <label for="floatingInput">Add New Medication Name</label>
</div>
<div className="form-floating mb-3">
  <input onChange= {(e)=>setNewMedDose(e.target.value)} 
    type="text" className="form-control" 
    id="floatingPassword" placeholder="Medication Dosage">
  </input>
  <label for="floatingPassword">New Medication Dosage</label>
</div>
<div className="form-floating mb-3">
  <input onChange={(e)=>setNewMedInstructions(e.target.value)} 
    type="text" className="form-control" id="floatingInput" 
    placeholder="Medication Instructions">
  </input>
  <label for="floatingInput">New Medication Instructions</label>
</div>
<div className="text-center">
  <button type="button" className="btn btn-primary text-center" 
    onClick={(e)=>postNewMed(e)}>Submit</button>
</div>


      
         {/* <div className="mapContainer" key={index}>
           <div>
             Medication Name: {med.name} <br></br>
             Dosage: {med.Dose} <br></br>
             Instructions: {med.Instructions} <br></br>
           <button onClick={() => deleteMed(med.id)}>Delete</button>
          </div> */}
{/* mapping over med list and displaying each in a card with bootstrap, including a button for a modal to update and a delete button */}
   {meds.map((med, index) => (
    <><div className="container text-center">
       <div className="row">
         <div className="card m-auto" key={index} style={{ width: 50 + 'rem' }}>
           <div className="card-header">{med.name}</div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Dosage: {med.Dose}</li>
             <li className="list-group-item">Instructions: {med.Instructions}</li>
           </ul>
          <ModalSection
          name={props.name}
          Dose={props.Dose}
          Instructions={props.Instructions}
          />
           <button className="btn-btn-danger" onClick={() => deleteMed(med.id)}>Delete this Medication</button>
         </div>
       </div>
     </div>
{/* form to edit and update each medication... currently unable to get modal to update */}
     <div>
          <form>
           <h3>Update this Med</h3>
           <label>Update Name</label>
           <input
             onChange={(e) => setUpdatedMedName(e.target.value)}
           ></input>
           <br></br>
           <label>Update Dosage</label>
           <input
             onChange={(e) => setUpdatedDose(e.target.value)}
           ></input>
           <br></br>
           <label>Update Instructions</label>
           <input
             onChange={(e) => setUpdatedInstructions(e.target.value)}
           ></input>
           <br></br>
           <button onClick={(e) => updateMed(e, med)}>Update</button>
         </form> 
       </div></>
        
      ))}
    </div>
  )
}

export default App
