import {Link, useNavigate } from "react-router-dom";
import "./css/auth.css";
import React from "react";
import { toast } from "react-toastify";
import { wait } from "../utils/waiter";

type Login = {
    username: string,
    password: string
}

export default function Login() {
    const [formInput, setFormInput] = React.useState<Login>({
        username:"",
        password:""
    });
    const [isLoading, setIsLoading] = React.useState(false);

    const navigate = useNavigate();
    
    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setIsLoading(true);
        await wait(5000);
        setIsLoading(false);
        if(formInput.username.toLowerCase() === "gladismiranda2004" && formInput.password === "Elena2004"){
            toast.success("Login successful!")
            return navigate("/dashboard")
        }else{
            toast.error("Incorrect username or password")
        }
    }

  return (
    <div>

    <div className="" style={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
   

<div className="auth-container">
        <div className="auth-brand">
         <Link style={{color:"black", textDecoration:"none", fontWeight:"800"}} to={"/"}> <h1 style={{ "fontFamily": "Audiowide;" }} className="audiowide" >TrustFunds</h1> </Link>
        </div>

        <div className="auth-form-container">
          <div style={{ "paddingTop": "30px" }} className="heading">
            <h1 style={{ "fontWeight": "bolder", "fontSize": "20px", "textAlign": "center" }}>
              Signin
            </h1>
          </div>

          <form onSubmit={handleSubmit} style={{ "padding": "20px 40px 40px 40px" }} action="" method="POST">

            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input onChange={handleInputChange} type="text" name='username' className="input is-medium" required />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input onChange={handleInputChange} type="password" name='password' className="input is-medium" required />

              </div>
            </div>

            <div className="field">
              <div className="control" style={{ display: "flex" }}>
                <input type="checkbox" /> <span style={{ marginLeft: 5 }}></span>
                <label className="checkbox">

                  Remember Me
                </label>
              </div>
            </div>



            <div style={{ "marginTop": "20px;" }} className="field is-grouped">
              <div style={{ "width": "100%" }} className="control">
                <div className="gradient-button">
                  {!isLoading?

                  
                  <button type="submit" >
                    Sign me in
                </button>
                :
                  <button type="button" >
                    Please wait.......
                </button>}
                </div>
              </div>
            </div>

          </form>
        </div>


      </div>
        
    </div>

    </div>
  )
}
