let imgArr1 = [
  "https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTU3OXxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaGRiLzk5MjgzODAyMTk0MjIuanBnfDU0Y2FhNjUwZjVhZWNmZWI0NGNmNDY3NzAzNDE3ZDkxOWIxMzQzMWZmZDVjZGMzM2Q2YzBiOThhYzBkMTg1MjQ",
 "https://www.reliancedigital.in/medias/intranet-Carousal-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDI1MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hlMC85OTQxNTE2MTU2OTU4LmpwZ3wxMDJmNjQ2YzdjYTIyMzk2NTM5NTMyYjZhNTgyN2M2MjlhMTM3Y2FmNWNhZjAwNzUxY2ExMjg0ZmNhNGMxZjRl"
]
let prev = document.querySelector(".prev")
var currentImageIndex = 0;
var currentImage = document.getElementById("current_image");

let next = document.querySelector(".next")

prev.addEventListener("click",()=>{
  if(currentImageIndex>0){
    currentImageIndex--
  }else{
    currentImageIndex++
  }
 
  displayImage1()
})
next.addEventListener("click",()=>{
 if(currentImageIndex==0){
  currentImageIndex++
 }else{
  currentImageIndex--
 }
  displayImage1()
})

displayImage1()
function displayImage1(){
  currentImage.setAttribute("src",imgArr1[currentImageIndex])
}
setInterval(() => {
  if(currentImageIndex>0){
    currentImageIndex--
  }else{
    currentImageIndex++
  }
  displayImage1()
}, 5000);

