"use strict";

const navLogo = document.getElementById("navLogo");
const navList = document.getElementById("navList");
const author = document.getElementById("author");

navLogo.addEventListener("click", function(){
navList.classList.toggle("hidden");
author.classList.toggle("hidden");
})