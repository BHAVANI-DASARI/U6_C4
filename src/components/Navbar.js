import { Link } from "react-router-dom"
export const Navbar=()=>{
    return <>
    <Link to="/">Home</Link>&ensp; &ensp;
    <Link to="/about">About</Link>&ensp; &ensp;
    <Link to="/products">Products</Link>&ensp; &ensp;
    </>
}