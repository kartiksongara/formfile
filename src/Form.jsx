import { useState } from "react"
import "./Form.css"
const Form=()=>{
    const [name,setname] =useState("")
    const [email,setEmail] =useState("")
    const [mobile,setmobile] =useState("")
    const [password,setpassword] =useState("")
    const [cpassword,setcpassword] =useState("")
    const [show,showset ]=useState(false) 

    
    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    const Name=(e)=>{
        e.preventDefault();
        setname(e.target.value)

    }
    const Email=(e)=>{
        e.preventDefault();

        setEmail(e.target.value)
    }
    const Mobile=(e)=>{
        e.preventDefault();

        setmobile(e.target.value)
        
    }
    const Password=(e)=>{
        e.preventDefault();

        setpassword(e.target.value)
        
    }
    const Cpassword=(e)=>{
        e.preventDefault();

        setcpassword(e.target.value)
    }
    const submitname=(e)=>{
        e.preventDefault();

        showset(true)
        
    }
   
    
    return (
        <>
        <div>
        <center>
        <div className="box">
            <h1>Form</h1>
            <form   action="">
            <label>Name</label>
            <input onChange={Name}  className="form-control"  placeholder="Enter your name " type="text" id="Name"/>
           {name.length == "" && <p>name is required</p> }
           {name.length >0 && name.length<3  && <p> name is to short</p>    }
            <label>Email</label>
            <input onChange={Email}className="form-control" placeholder="Enter  your email" type="text" id="Email"/>
            { email.length =="" && <p>email required</p>}
            {email.length >0 && email<50 && !emailValidation.test(email) && <p>enter valid email</p> }
            <label>Mobile</label>
            <input onChange={Mobile} className="form-control" placeholder="Enter your number" type="number" id="Mobile" />
            {mobile.length ==" " && <p>number is required</p>}
            {mobile.length >0 && mobile.length >=11   && <p>not valid number</p>}

            <label>Password</label>
            <input onChange={Password} className="form-control" placeholder="Enter your password" type="text"  id="Password"/>
            {password.length =="" && <p>password is required</p>}
            {password.length >0 && password.length >50 && <p>password is not valid</p>}
            <label>cpassword</label>
            <input onChange={Cpassword} className="form-control" type="text" placeholder="Enter your cpassword" id="Cpassword" />
            {cpassword.length ==""&&<p>cp is required</p>}
            {password.length !==cpassword.length && <p>password is not match</p>}
            <div className="box1">
            <button  onClick={submitname} type="submit" className="btn btn-dark btn1">Submit</button>
    
            </div>
            </form>
            

        </div>
        </center>
        <center>
        {    show &&
            <table border={5} width="80%">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Cpassword </th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{mobile}</td>
                    <td>{password}</td>
                    <td>{cpassword}</td>


                </tr>
            </table>
            }
            </center>
        </div>
    
        </>
    )
}
export default Form