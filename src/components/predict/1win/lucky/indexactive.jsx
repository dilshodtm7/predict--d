import React, { useState } from "react";
import "./index.css";



const indexactive = () => {

  
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
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 3000);
  }
  if (wla()[0] == 2) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 3000);
  }
  if (wla()[0] == 3) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 2700);
  }
  if (wla()[0] == 4) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 2500);
  }
  if (wla()[0] == 5) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 6) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 7) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 2000);
  }
  if (wla()[0] == 8) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 1600);
  }
  if (wla()[0] == 9) {
    setInterval(function () {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = wla()[1];
      }
    }, wla()[0] * 1800);
  }


 
  


  return (
    <>

      
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

export default indexactive;
