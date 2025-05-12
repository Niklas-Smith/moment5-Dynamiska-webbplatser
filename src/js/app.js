"use strict"


let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
// Two varible that store ids

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Add eventlistneer to varible that on click call function.

function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");
// One varible that store id
   
    let style = window.getComputedStyle(navMenuEl);
 // Varible that get a style from navMenuEl
    if(style.display === "none") {
        navMenuEl.style.display = "block";
        // when style is display none change to block when clikc 

    } else {
        navMenuEl.style.display = "none";
    }
 // if style is not none when click change to none.
}    
// much of my code for burgermeny and meny is taken from Malin larsson(MallarMiun) (code from teacher)