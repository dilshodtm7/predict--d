import React, { useState } from "react";
import { BsKey } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./index.css";

const index = () => {
  const navigate = useNavigate();
const toks = localStorage.getItem("token")

  const [keytocheck, setkeytocheck] = useState('');


  const handleSubmits = async (e) => {
    e.preventDefault();
  if( localStorage.getItem('status') === null){
      alert('Активация доступна только для зарегистрированных пользователей')
      navigate("/predict/lucky")
    }else{
      if(localStorage.getItem('id') === keytocheck+5233&&localStorage.getItem('status') ==='activated'){
        localStorage.setItem('token','active');
        navigate("/predict/lucky/active")
      } else {
        alert('Wrong key')
      }
    }
  }
  const users = localStorage.getItem("user");

  return (
    <>

      <div className={toks? `css-modal-details d-none`:`css-modal-details `}>    
    <details open>
        <summary  className="d-none">Название кнопки</summary>
        <div className="cmc">
            <div className="cmt">
         <h2 className="reds">{users.toUpperCase().split('@')[0]}</h2>

           
        <div className="d-block">
               <input type="text" className="activation-input" 
        onChange={
          (e)=>{
            setkeytocheck(e.target.value.toLowerCase())
          }
        }
         placeholder="Activation key" />
           <button 
            onClick={handleSubmits}
            className='activate'>  Активация!</button>
               </div>
            <hr  className="hr"/>
                <a href="https://t.me/inside_lucky_admin"><button className="activatekey"><BsKey />Купить ключ</button></a>    
            </div>
        </div>
    </details>
</div>
      <div className="container-avia">
        <h3 className="for-h">Lucky Jet</h3>
      <div className="loader">

      <div className="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" class="plane-img"/>
      </div>
      <div className="earth-wrapper">
        <h3 className="lucky-text" id="lucky">
          Wait
        </h3>
      </div>  
    </div>  
      
    </div>
    </>
  );
};

export default index;
