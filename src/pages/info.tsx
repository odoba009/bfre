import menu from "../assets/menu.png";
import {Link } from "react-router-dom";
import "./css/auth.css";

export default function Info() {
   
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
              Personal details
            </h1>
          </div>

          <form style={{ "padding": "20px 40px 40px 40px" }} action="" method="POST">

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input value={"Gladis Elena Miranda"} disabled type="text" name='username' className="input is-medium" required />
              </div>
            </div>

            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input type="text" name='text' disabled value={"52615 Sun Dance Drive unit 2"} className="input is-medium" required />

              </div>
            </div>

            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input value={"Fort Cavazos"} disabled type="text" name='username' className="input is-medium" required />
              </div>
            </div>
            <div className="field">
              <label className="label">State</label>
              <div className="control">
                <input value={"Texas"} disabled type="text" name='username' className="input is-medium" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Zip code</label>
              <div className="control">
                <input value={"76544"} disabled type="text" name='username' className="input is-medium" required />
              </div>
            </div>



            <div style={{ "marginTop": "20px;" }} className="field is-grouped">
              <div style={{ "width": "100%" }} className="control">
                <div className="gradient-button">
             
                  <button type="button" >
                    Change details
                </button>
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
