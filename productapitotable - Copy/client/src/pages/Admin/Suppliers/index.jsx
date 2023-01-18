import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Index() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => setData(res.data))
  }, [])
 
  const handleDelete = (idFromMap) => {
    axios.delete(`http://localhost:4000/products/${idFromMap}`)
      .then(res => console.log(res))
    setData(data.filter(x=> x.id !== idFromMap))
  }

  const handleView = (id) => {
    navigate(`/admin/suppliers/${id}`)
  }
  function handleEdit(id){
    navigate(`/admin/edit/${id}`)
  }


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((sup) => (
            <TableRow
              key={sup.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sup.name}
              </TableCell>
              <TableCell>{sup.price}</TableCell>
              <TableCell>{sup.count}</TableCell>
              <TableCell><Button variant="text"  onClick={()=>handleDelete(sup.id)}>Delete</Button></TableCell>
              <TableCell><Button variant="text"  onClick={()=>handleView(sup.id)}>View</Button></TableCell>
              <TableCell><Button variant="text"  onClick={()=>handleEdit(sup.id)}>Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Index