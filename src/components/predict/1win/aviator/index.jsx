// import React,{useState} from "react";
// import "./index.css";

// const index = () => {

//   if(localStorage.getItem('aviator')){
//   }else{
//     localStorage.setItem('aviator', true);
//     console.log('stop');

//   }


//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(9);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  
//   }
  
  
//   function wa (){
//     let x = Math.floor(Math.random() * 99 + 1);
//     let y = getRandomIntInclusive();
//     let z = y + '.' + x;
//     return [y , z ];
  
//   }
  
  
  
//   if (wa()[0] == 1) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*4000)
  
//   }
//   if (wa()[0] == 2) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*3700)
  
//   }
//   if (wa()[0] == 3) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*3200)
  
//   }
//   if (wa()[0] == 4) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*2700)
  
//   }
//   if (wa()[0] == 5) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*2500)
  
//   }
//   if (wa()[0] == 6) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*2300)
  
//   }
//   if (wa()[0] == 7) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*2000)
  
//   }
//   if (wa()[0] == 8) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
      
//     } , wa()[0]*1800)
  
//   }
//   if (wa()[0] == 9) {
//     setInterval (function(){
//       if(localStorage.getItem('aviator')){
//         document.getElementById('winavia').textContent = wa()[1];
//   console.log(wa()[0]);
  
//       }
//     } , wa()[0]*1600)
//   }
//   return (
//     <>
//       <div className="container-avia">
//         <h3 className="for-h">1WIN AVIATOR</h3>
//         <img src={Avia} className="list_imgs" alt="" />
//         <h3 className="avia-text" id="winavia">
//         </h3>

//         <div className="lds-defaultavia">
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;
