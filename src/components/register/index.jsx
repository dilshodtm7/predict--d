import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../login/index.css";

const index = () => {
  const [logindata, setLogindata] = useState({});
  const navigate = useNavigate();

  const Api = "https://pred-4pmr.onrender.com/auth/sign-up";

  const registerForm = async (e) => {
    e.preventDefault();
    const akama = document.getElementById("akama");
    const alerts = document.getElementById("solreg");
    akama.innerHTML = "WAIT";
    const response = await fetch(Api, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    });
    if (response) {
      const data = await response.json();
      if (data.status == 409) {
        const akama = document.getElementById("akama");
        const alerts = document.getElementById("solreg");
        alerts.innerHTML = data.message;
        akama.innerHTML = "Register";
      }
      else if(data.status==201){
        const akama = document.getElementById("akama");
      const alerts = document.getElementById("solreg");
      alerts.innerHTML = data.message;
      akama.innerHTML = "WAIT";
      setTimeout(() => {
        navigate('/')
      }, 5000)

      }
      

      
    } else {
      alerts.innerHTML = data.message;
    }
  };

  return (
    <>
      <div className="container-avia">
        <h2 className="for-h">Registration</h2>
        <h3 id="solreg" className="aa"></h3>

        <form className="forms" action="" onSubmit={registerForm}>
<input
            type="email"
            placeholder="Email"
            className="reginput"
            onChange={(e) => {
              setLogindata({
                ...logindata,
                email: e.target.value.toLocaleLowerCase(),
              });
            }}
          />
           <input
            type="password"
            placeholder="Password"
            required
            className="reginput"
            onChange={(e) => {
              setLogindata({
                ...logindata,
                password: e.target.value.toLocaleLowerCase(),
              });
            }}
          />
          <button id="akama" className="regbutton" type="submit">
            Connect
          </button>
        </form>
      </div>
    </>
  );
};

export default index;
