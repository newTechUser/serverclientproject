import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Index() {
  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [count, setcount] = useState("")
  const navigate = useNavigate();


  const handleCreate = (e) => {
    e.preventDefault()
    const obj= {
      name: name,
      price: price,
      count:count
    }
    axios.post("http://localhost:4000/products", obj)
      .then(res=> console.log(res))
    navigate("/admin/suppliers")
  }


  return (
    <form onSubmit={handleCreate}>
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="Name"
        value={name}
        onChange={(e)=> setname(e.target.value)}
      />
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="price"
        value={price}
        onChange={(e)=> setprice(e.target.value)}
      />
      <TextField
        style={{display: "block"}}
        id="outlined-textarea"
        placeholder="Count"
        value={count}
        onChange={(e)=> setcount(e.target.value)}
      />
      <Button variant="contained" type='submit'>Save</Button>
    </form>
  )
}

export default Index