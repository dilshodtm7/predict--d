import React from "react";
import Luckys from "../../../../assets/luckys.png";
import Avia from "../../../../assets/avi.png";
import Rocket from "../../../../assets/rockets.png";

import "./index.css";

const index = () => {

  const tokroket = localStorage.getItem("tokenroket")

  if (localStorage.getItem("tokenroket")) {
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function wlr() {
    let x = Math.floor(Math.random() * 99 + 1);
    let y = getRandomIntInclusive();
    let z = y + "." + x;
    return [y, z];
  }

  if (wlr()[0] == 1) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 3000);
  }
  if (wlr()[0] == 2) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 3000);
  }
  if (wlr()[0] == 3) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 2700);
  }
  if (wlr()[0] == 4) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 2500);
  }
  if (wlr()[0] == 5) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 2000);
  }
  if (wlr()[0] == 6) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 2000);
  }
  if (wlr()[0] == 7) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 2000);
  }
  if (wlr()[0] == 8) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 1600);
  }
  if (wlr()[0] == 9) {
    setInterval(function () {
      if (localStorage.getItem("tokenroket")) {
        document.getElementById("rocket").textContent = wlr()[1];
      }
    }, wlr()[0] * 1800);
  }
  const users = localStorage.getItem("user");
  return (
    <>

<div className={tokroket? `css-modal-details d-none`:`css-modal-details `}>    
    <details open>
        <summary  className="d-none">Название кнопки</summary>
        <div className="cmc">
            <div className="cmt">
            <h2 className="reds">{users.toUpperCase().split('@')[0]}</h2>
                <h3>Your account is not activated</h3>  
                <a href="https://t.me/lucky_jet_admin"><button className="activate">ACTIVATE</button></a>
                      
            </div>
        </div>
    </details>
</div>
      <div className="container-avia">
        <h3 className="for-h">Привет {users.toUpperCase().split('@')[0]}</h3>
        <img src={Rocket} className="list_imgs" alt="" />
        <h3 className="lucky-text" id="rocket">
          Wait
        </h3>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default index;
