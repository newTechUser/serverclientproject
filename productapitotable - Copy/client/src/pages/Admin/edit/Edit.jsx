
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Edit() {

    let { supId } = useParams()
    const navigate = useNavigate()

    const [name, setname] = useState([])
    const [price, setprice] = useState([])
    const [count, setcount] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/products/${supId}`)                 
            .then(res => {
                setname(res.data.name)
                setprice(res.data.price)
                setcount(res.data.count)
            })                                                                                                                                       
            .catch((error)=>{
                console.log(error);
            })
    }, [])


    function handlename(e){
        setname(e.target.value)
    }
    function handleprice(e){
        setprice(e.target.value)
    }
    function handlecount(e){
        setcount(e.target.value)
    }


    function handleEdit(){

        axios.put(`http://localhost:4000/products/${supId}`,{
            name:name,
            price:price,
            count:count
        })                 
        
    }
  return (
    <>
       <form onSubmit={handleEdit}>
                 name : <input type="text" value={name} onChange={handlename}/><br/><br/>
                price : <input type="text" value={price} onChange={handleprice}/><br/><br/>                                                                          
                count : <input type="text" value={count} onChange={handlecount}/><br/><br/>
                <button type='submit'>Save</button>
       </form>
    </>
  )
}

export default Edit