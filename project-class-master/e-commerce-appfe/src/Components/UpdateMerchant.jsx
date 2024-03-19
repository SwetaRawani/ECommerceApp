import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/UpdateMerchant.css'
import axios from 'axios'
 function UpdateMerchant() {
  let [id,setid]=useState("")
  let [name,setname] = useState("")
  let [email,setemail] = useState("")
  let [gst_number,setgst] = useState("")
  let [phone,setphone] = useState("")
  let [password,setpassword] = useState("")

  let data = {name,email,gst_number,phone,password}
  let merchant=JSON.parse(localStorage.getItem("Merchant"))
  useEffect(()=>{
    setid(merchant.name);
    setname(merchant.name);
    setemail(merchant.email);
    setgst(merchant.gst_number);
    setphone(merchant.phone);
    setpassword(merchant.password)
  },[])

let UpdateDate=(e)=>{
  e.preventDefault();
  axios.put(`http://localhost:8080/merchants`,data)
  .then((res)=>{
    console.log(res);
    alert("Data Edited Successfull")
  })
  .catch((err)=>{
    console.log(err);
    alert("Invalid Details")
  })
}
  return (
    <div className='merchantedit'>
      <form  onSubmit={UpdateDate} action="">
                <label htmlFor="">Name</label>
                <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the Name"  />
                <label htmlFor="">GST_number</label>
                <input required type="text" value={gst_number} onChange={(e)=>{setgst(e.target.value)}}  placeholder="Enter the GST "  />
                <label htmlFor="">Email</label>
                <input required type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter the Email"  />
                <label htmlFor="">Phone No</label>
                <input required type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}}  pattern="[0-9]{10}" placeholder="Enter the Phone"  />
                <label htmlFor="">Password</label>
                <input required type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password"  />
            <button >Submit</button>
            </form>
    </div>
  )
}

export default UpdateMerchant