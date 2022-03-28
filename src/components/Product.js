import { useState ,useEffect} from "react";
import axios from "axios"
import { useDispatch ,useSelector} from "react-redux";
import { ADD_pro, LOW } from "../redux/actions";
import "./product.css"
import { Link } from "react-router-dom";

export const Product=()=>{
    // const [date,setDate]=useState([])
    const dispatch=useDispatch();
     const data=useSelector((store)=>store)
     console.log("data",data.result)
    useEffect(()=>{
        axios.get("https://movie-fake-server.herokuapp.com/products").then((res=>{
            // console.log(res.data)
            // setDate(res.data)
            dispatch(ADD_pro(res.data))
        }))
    },[])
    return <>
    <h2>Product</h2>
    <select onChange={((e)=>{
        // console.log(e.target.value)
        dispatch(LOW(e.target.value))
    })}>
        <option>Sort</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
    </select>
    <div className="product">{data.result.map((e,id)=>{
     return   <div key={e.id} >
            <Link to={`/products/${e.id}`} style={{textDecoration:"none",color:"black"}}><img src={e.image}/>
            <div><span>Brand:</span>{e.brand}</div>
            <div><span>Id:</span>{e.id}</div>
            <div><span>Title:</span>{e.title}</div>
            <div><span>Price:</span>{e.price}</div>
            <div><span>Category:</span>{e.category}</div></Link>
         
            

        </div>
    })}</div>
    </>
}