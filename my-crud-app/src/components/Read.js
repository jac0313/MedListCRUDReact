import React from 'react';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList`)
            .then((response) => {
                setAPIData(response.data);
            })
       
    }, [])
    const setData = (data) => {
        let { id, medicationName, medicationDosage, medicationInstructions } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Medication Name', medicationName);
        localStorage.setItem('Medication Dosage', medicationDosage);
        localStorage.setItem('Medication Instructions', medicationInstructions)
     }
     const getData = () => {
        axios.get(`https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    
     const onDelete = (id) => {
        axios.delete(`https://650b79e4dfd73d1fab0a02b6.mockapi.io/medList/${id}`)
        .then(() => {
            getData();
        })
      }
    
   return(
    <>
    <Table className='mt-3'  bordered hover>
    <thead>
      <tr>
        <th>Medication Name</th>
        <th>Medication Dosage</th>
        <th>Medication Instructions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {APIData.map((data) => {
        return(
     <tr>
        <td>{data.medicationName}</td>
        <td>{data.medicationDosage}</td>
        <td>{data.medicationInstructions}</td>
        <Link to='/update'>
        <td><Button className='text-white p-1 m-2' onClick={()=>setData(data)} variant="info">Update</Button></td>
        </Link>
        <td><Button className='p-1 m-1' onClick={() => onDelete(data.id)} variant= 'danger'>Delete</Button></td>
        </tr>
        )})}
      </tbody>
    </Table>
    <Link to= '/create'>
    <Button variant="primary" className='add-btn'>Add New Medication</Button>
    </Link>
    </>
    
  );
  
   }
  

export default Read