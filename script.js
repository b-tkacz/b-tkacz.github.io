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


// DROPDOWN 

// let dropBtn = document.getElementById("dropBtn")
// let dropDownContent = document.getElementById("dropDownContent")

// dropBtn.onclick = function() {
//    if (dropDownContent.style.display = "none") {
//      dropDownContent.style.display = "block";
//     }
//     else if(dropDownContent.style.display = "block") {
//       onclick.dropDownContent.style.display = "none"
//     }
// }




