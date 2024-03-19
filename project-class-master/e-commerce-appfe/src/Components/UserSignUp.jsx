import { useState } from "react"
import '../styles/UserSignup.css'
import axios from 'axios'
function UserSignUp() {
    let [name,setname]=useState("");
    let[phone,setphone]=useState("");
    let[age,setage]=useState("");
    let[gender,setgender]=useState("");
    let[email,setemail]=useState("");
    let[password,setpassword]=useState("");

    let data={name,phone,age,gender,email,password}


    let addUser = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/users',data)
        .then((res)=>{
            console.log(res);
            alert("Data Added succesfull")
        })
        .catch((err)=>{
            console.log(err);
            alert("Data Not Found")
        })
    }


    return (
        <div className="usersignup">
            <form onSubmit={addUser} action="">
                <label htmlFor="">Name</label>
                <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the Name"  />
                <label htmlFor="">Age</label>
                <input required type="number" value={age} onChange={(e)=>{setage(e.target.value)}}  placeholder="Enter the Age "  />
                <label htmlFor="">Email</label>
                <input required type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter the Email"  />
                <label htmlFor="">Phone No</label>
                <input required type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}}  pattern="[0-9]{10}" placeholder="Enter the Phone"  />
                <label htmlFor="">Gender</label>
                <input required type="text"  value={gender} onChange={(e)=>{setgender(e.target.value)}} placeholder="Enter the Email"  />
                <label htmlFor="">Password</label>
                <input required type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password"  />
            <button className='btn btn-outline-info'>Submit</button>
            </form>
        </div>
    )
}
export default UserSignUp