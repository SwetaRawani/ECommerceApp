import { useState } from "react"
// import "../styles/AddProduct.css"
import "../styles/AddProduct.css"
import axios from 'axios'
function AddProducts() {
    let[name,setname]=useState("");
    let[brand,setbrand]=useState("");
    let[category,setcategory]=useState("");
    let[description,setdescription]=useState("");
    let[cost,setcost]=useState("");
    let[image_url,setimageurl]=useState("");

    let data={name,brand,category,description,cost,image_url}
    let admin=JSON.parse(localStorage.getItem("Merchant"))
    let addData=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/products/${admin.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Products Added succesfull")
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong")
        })
    }
    return(
        <div className="addProducts">
            
        <form onSubmit={addData} action="">
            <label htmlFor="">Name</label>
            <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the Name"  />
            <label htmlFor="">Brand</label>
            <input required type="text" value={brand} onChange={(e)=>{setbrand(e.target.value)}}  placeholder="Enter the Brand "  />
            <label htmlFor="">Category</label>
            <input required type="text"  value={category} onChange={(e)=>{setcategory(e.target.value)}} placeholder="Enter the Category"  />
            <label htmlFor="">Description</label>
            <input required type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}}  placeholder="Enter the Description"  />
            <label htmlFor="">Cost</label>
            <input required type="number" value={cost} onChange={(e)=>{setcost(e.target.value)}} placeholder="Enter the Cost"  />
            <label htmlFor="">Image_Url</label>
            <input required type="text" value={image_url} onChange={(e)=>{setimageurl(e.target.value)}} placeholder="Enter the Image_Url"  />
        <button className='btn btn-outline-info'>Submit</button>
        </form>
    </div>
)
    }
export default AddProducts