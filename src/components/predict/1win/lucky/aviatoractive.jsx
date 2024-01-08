import React, { useState } from "react";
import Avia from "../../../../assets/39aaee80-a671-4232-9dbb-c61990-unscreen.gif";
import { BsKey } from "react-icons/bs";
import "./index.css";

const index = () => {

  const [keytocheck, setkeytocheck] = useState('');


  if (localStorage.getItem("tokenavia")) {
}

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function wla() {
    let x = Math.floor(Math.random() * 99 + 1);
    let y = getRandomIntInclusive();
    let z = y + "." + x;
    return [y, z];
  }

  if (wla()[0] == 1) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 3000);
  }
  if (wla()[0] == 2) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 3000);
  }
  if (wla()[0] == 3) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 2700);
  }
  if (wla()[0] == 4) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 2500);
  }
  if (wla()[0] == 5) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 6) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 7) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 8) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 1600);
  }
  if (wla()[0] == 9) {
    setInterval(function () {
      if (localStorage.getItem("tokenavia")) {
        document.getElementById("aviators").textContent = wla()[1];
      }
    }, wla()[0] * 1800);
  }

  const users = localStorage.getItem("user");

 
  


  return (
    <>

      
      <div className="container-avia">
        <h3 className="for-h">Aviator</h3>
{/*         <img src={Luckys} className="list_imgs" alt="" /> */}
      <div class="loader">

      <div class="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" class="plane-img"/>
      </div>
      <div class="earth-wrapper">
        <h3 className="lucky-text" id="aviators">
          Wait
        </h3>
      </div>  
    </div>  
      
    </div>
    </>
  );
};

export default index;
