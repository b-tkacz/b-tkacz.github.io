    //  MODAL 

let modal = document.getElementById("modal");

let btn = document.getElementById("openModal");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// ON CLICK 

// document.getElementById('dropBtn').onclick = function(){
//   document.getElementById("dropDownContent").style.display = "block";
  // function () {
  // if (document.getElementById("dropDownContent").style.display = "block") {
  //   document.getElementById("dropDownContent").style.display = "none";
  // }
// }

// function dropDown() {
//   let menu = document.getElementById("dropDownContent");
//   if (menu.style.display === "block") {
//     menu.style.display === "none";
//   }
//   else {
//     menu.style.display === "block";
//   }
// }





// function dropdown () {
//   if ()
// }


// BLURRED BACKGROUND

const loadText = document.querySelector('.loading-text')
const bg  =  document.querySelector('.bg')

let load = 0 

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
      clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}