import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from '@mui/material/Button';


function Index() {

    const [supplier, setSupplier] = useState({})
    let { supId } = useParams()
    const navigate = useNavigate()
console.log(supId);
    useEffect(() => {
        axios.get(`http://localhost:4000/products/${supId}`)                 
            .then(res => setSupplier(res.data))                                                                                                                                       
    }, [])

    return (
        <>
            <div>{supplier.name}</div>
            <div>{supplier.price}</div>
            <div>{supplier.count}</div>
            <Button variant="text" onClick={()=> navigate(-1)}>Back</Button>

        </> 

    )
}

export default Index