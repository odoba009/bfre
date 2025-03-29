import menu from "../assets/menu.png";
import {Link } from "react-router-dom";
import "./css/auth.css";
import React from "react";
import { toast } from "react-toastify";
import { wait } from "../utils/waiter";

type TransferType = {
    accNum: string,
    accName: string,
    routine: string,
    amount: number,
}

export default function Transfer() {
    const [formInput, setFormInput] = React.useState<TransferType>({
        accName:"",
        accNum:"",
        routine:"",
        amount:0
    });
    const [isLoading, setIsLoading] = React.useState(false);

    
    
    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(formInput.amount < 100){
            return toast.error("Amount cannot be less than 100")
        }
        setIsLoading(true);
        await wait(7000);
        setIsLoading(false);
        toast.error("You have to pay $5,000.00 tax to IRS agent")
    }

  return (
    <div>
<div className="dashboard-nav">
                <div style={{ height: 30, marginLeft: 20 }}>
                    <img style={{ height: "100%", objectFit: "contain" }} src={menu} alt="" />
                </div>
                <div className="audiowide">TrustFund Home</div>
                <div>
                    <Link style={{marginRight:20, color:"white"}} to={"/login"}>Logout</Link>
                </div>
            </div>
    <div className="" style={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
   

<div className="auth-container">


        <div className="auth-form-container">
          <div style={{ "paddingTop": "30px" }} className="heading">
          <Link style={{marginLeft:"40px", fontWeight:"bold", fontSize:"18px", textTransform:"lowercase"}} to={"/dashboard"}>≪ back</Link>
            <h1 style={{ "fontWeight": "bolder", "fontSize": "20px", "textAlign": "center" }}>
              Transfer
            </h1>
          </div>

          <form onSubmit={handleSubmit} style={{ "padding": "20px 40px 40px 40px" }} action="" method="POST">

            <div className="field">
              <label className="label">Bank Account Number</label>
              <div className="control">
                <input onChange={handleInputChange} value={formInput.accNum} type="text" name='accNum' className="input is-medium" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Bank Routine Number</label>
              <div className="control">
                <input onChange={handleInputChange} value={formInput.routine} type="text" name='routine' className="input is-medium" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Account Name</label>
              <div className="control">
                <input onChange={handleInputChange} value={formInput.accName} type="text" name='accName' className="input is-medium" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Amount</label>
              <div className="control">
                <input onChange={handleInputChange} value={formInput.amount} type="number" name='amount' className="input is-medium" required />
              </div>
            </div>


            <div style={{ "marginTop": "20px;" }} className="field is-grouped">
              <div style={{ "width": "100%" }} className="control">
                <div className="gradient-button">
                  {!isLoading?

                  
                  <button type="submit" >
                    Transfer
                </button>
                :
                  <button type="button" >
                    Transaction in progress.......
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
