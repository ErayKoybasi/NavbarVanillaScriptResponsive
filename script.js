const bars = document.getElementById("hamburger");
const change = document.getElementById("change");
const drop = document.getElementById("dropdown")

bars.addEventListener("click",function(){
  if (bars.style.display = "none"){
    change.style.display = "block"
    drop.style.display ="flex"
  }
})

change.addEventListener("click",function(){
  if (bars.style.display = "block"){
    change.style.display="none"
    drop.style.display ="none"
  }
})


