import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentias,setCredentias] = useState({email:"",password:""})
  let navigate = useNavigate();

      const handleSubmit = async (e)=>{
          e.preventDefault();
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify({ email:credentias.email,password:credentias.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //Save the auth token and redirect
                localStorage.setItem('token',json.authtoken)
                props.showAlert("Logged in Success","success")
                navigate("/");
          }
          else{
              props.showAlert("Invalid Credintials","danger")

          }
      }

      const onChange = (e) => {
        setCredentias({ ...credentias, [e.target.name]: e.target.value });
      };

  return (
    <div className='container mt-5'>
      <h2>Login to Continue to Abhishek Notebook</h2>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={onChange}  value={credentias.email} id="email" name="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} value={credentias.password} name="password" id="password" />
  </div>

  <button type="submit" className="btn btn-danger" >Login</button>
</form>

      
    </div>
  )
}

export default Login
