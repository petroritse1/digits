"use strict";

const navBtn = document.getElementById("navbtn_id");
const navClose = document.querySelector(".navbar__closeicon");
const overLay = document.querySelector(".overlay");
const navBar = document.querySelector(".navbar__navigation");
const navInfo = document.querySelector('.navbar__info')

const allClass = function (){

    navBtn.classList.toggle("hidden");
    navClose.classList.toggle("hidden");
    // navBar.style.display = "block";
    // navBar.style.visibility = "visible";
    overLay.classList.toggle("hidden");
}

const navFunc = function (){
    let display = navBar.style.display;
    let visi = navBar.style.visibility;
    console.log(navBar.style.display,"as navBar");
    
    if (display === "none"  || display=== ""){
        display = "block";
        visi = "visible";
        navBar.style.display = display;
        navBar.style.visibility = visi;
    } else {
        display = "none";
        visi = "hidden";
        navBar.style.display = display;
        navBar.style.visibility = visi;
    };
    
  
    console.log(display,visi)

}

 
navBtn.addEventListener("click",() => {
    allClass()
    navFunc()
});
navClose.addEventListener("click",() => {
    allClass()
    navFunc()
});
overLay.addEventListener("click",function() {
    navFunc()
    allClass()
    
});