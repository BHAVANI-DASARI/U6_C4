import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

export const Productdetail=()=>{
    const {id}=useParams();
        const [state, setstate] = useState({});
        useEffect(() => {
          axios.get(`https://movie-fake-server.herokuapp.com/products/${id}`).then((res)=>{
              setstate(res.data)
          })
        }, []);
    return <>
    <h2>Productdetail</h2>
    <img src={state.image}/>
    <div><span>Brand:</span>{state.brand}</div>
            <div><span>Id:</span>{state.id}</div>
            <div><span>Title:</span>{state.title}</div>
            <div><span>Price:</span>{state.price}</div>
            <div><span>Category:</span>{state.category}</div>
    </>
}