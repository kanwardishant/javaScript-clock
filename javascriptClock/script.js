const unOrgList = document.querySelectorAll(".ul-1 li")
const today = new Date().getDay()
let clock = document.querySelector(".clock")
let twelveHour = true

unOrgList[today].classList.add("yellow")

if (twelveHour){
    document.querySelector(".first-btn").style.color = "rgb(139, 5, 5)"
}
function changeHour() {
   
    twelveHour = true
    document.querySelector(".first-btn").style.color = "rgb(139, 5, 5)"
    document.querySelector(".second-btn").style.color = "white"
}
    
function againChange() {
    twelveHour = false
    document.querySelector(".second-btn").style.color = "rgb(139, 5, 5)"
    document.querySelector(".first-btn").style.color = "white"
}
function runTime() {
let currentTime = new Date()
  h = currentTime.getHours() 
  m = currentTime.getMinutes()
  s = currentTime.getSeconds()
  
  if (s < 10 ) {
    s = "0" + s
}
  if (twelveHour && h > 12) {
   
    s = s + " PM "
  } else if( twelveHour && h < 13) {
      s = s + " AM"
  }
 

  if (twelveHour && h > 12) {
      h = h - 12
     
  } 
  
   if (h < 10 ){
      h = "0" + h
  }
  if ( m < 10) {
      m = "0" + m
  }
  clock.textContent = h +":" + m +":" + s
 
}
  
setInterval(runTime, 1000)
 





 
  
  
 