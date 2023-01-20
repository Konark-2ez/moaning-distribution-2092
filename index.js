//FOR FIRST CAROUSEL
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

//FOR SECOND CAROUSEL
let imgArr2 = [
  "https://www.reliancedigital.in/medias/Smartwatches-Carnival-Carousel-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjE3NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hjNy85OTQ1ODI3NzcwMzk4LmpwZ3xmM2IxYjAyZjAzMmZmODYzNjk4OTU5MzdlMzhjNTY1YzU1ZDk3N2Y2MzFiOGE1N2M2YjUxOTEyODE4YzRiNTFk",
  "https://www.reliancedigital.in/medias/iPhone-13-CLP-Banner-59900-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2NDc0OHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDA0Lzk5NDkyMzI5ODgxOTAuanBnfGUzZTI4NzExNDI5MzMwOTMzYzc2NGU4OTM4M2FiNzY5YjcxZWIzMzk0ZjA1ZThlMWMyMThjNDg4NWNmYTZjMzM",
  "https://www.reliancedigital.in/medias/Televisions-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5MTYwMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaGY3Lzk5Mzc4OTQ4MzQyMDYuanBnfGVhYjg1ZDkzZjUxOTkzNjhkNWFkYWVkNGYwYjMzNzk2ZTZkM2U5MjNkMWJmZmJjZjYxNzJkNTQ5NzFlNGZiNDk",
  "https://www.reliancedigital.in/medias/iPhone14-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0MjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ1L2g1MS85OTQ5MjMyODU3MTE4LmpwZ3w3OWFjMWVhZjE0Y2EzNzAyODcyZTBmM2M2MzQ1OTU1YzI2Y2QwYjg4MGYyYTc0NjFmOGNhM2NhYjEyYTk5MTk4",
  "https://www.reliancedigital.in/medias/Laptops-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ3MTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2g3Zi85OTM3ODk0NTcyMDYyLmpwZ3w3NDVjM2RmNWQ4OWQwNzRmYmNjNDQ4MWNkMDE5ZTdkNjRiNmZlMjVlNThkMTBjZTVmZTllOGRmYWNiNDhjNThj",
  "https://www.reliancedigital.in/medias/Carousel-Banner-Winter-Store-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjM1NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2hiMS85OTMzMzQ5NjgzMjMwLmpwZ3wyM2ZkYjBmNWRkZmZlMmZlZTRiYWJmZmVlMDg4ZjBjZTE2YzM0ODdkNmM5NDRmNWExNjFjMTk3N2M4NTFjOWRh"
]
let previous = document.querySelector(".prev")
var currentImageIndex1 = 0;
var currentImage1 = document.getElementById("current_image2");

let nex = document.querySelector(".next")

previous.addEventListener("click",()=>{
  currentImageIndex1 = (currentImageIndex1 + imgArr2.length - 1) % imgArr2.length
 
  displayImage2()
})
nex.addEventListener("click",()=>{
  currentImageIndex1 = (currentImageIndex1 + imgArr2.length + 1) % imgArr2.length
  displayImage2()
})

displayImage2()
function displayImage2(){
  currentImage1.setAttribute("src",imgArr2[currentImageIndex1])
 // console.log(currentImage1)
}
setInterval(() => {
  
  currentImageIndex1 = (currentImageIndex1 + 1) % imgArr2.length
  displayImage2()
}, 2000);
//FOR MIDSECTION
let array=[{
  "createdAt": "2023-01-18T15:49:42.760Z",
  "brand": "Karbonn 7 Kg Semi Automatic Top Load Washing Machine, White/Red, KJC70S-2024L",
  "image": "https://www.reliancedigital.in/medias/Karbonn-KJC70S-2024L-Washing-Machine-493627329-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTM1NXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGI5Lzk5MjgzMjI3NzcxMTguanBnfDRkNTI5YTlmMzUxYmFhMTk1NDQyNDE1OWU1MDI4NTY4ZGM0OTM0Yzc4YWE5ODI2MmNhNjE0NzljYTZiMDQ2ZDA",
  "price": "6999.00",
  "id": "1"
},
{
  "createdAt": "2023-01-18T17:53:55.824Z",
  "brand": "Kelvinator 170 litres Direct Cool 2 Star Single Door Refrigerator, Maroon Red, KRD-C190MRP",
  "image": "https://www.reliancedigital.in/medias/Karbonn-KJC70S-2024L-Washing-Machine-493627329-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTM1NXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGI5Lzk5MjgzMjI3NzcxMTguanBnfDRkNTI5YTlmMzUxYmFhMTk1NDQyNDE1OWU1MDI4NTY4ZGM0OTM0Yzc4YWE5ODI2MmNhNjE0NzljYTZiMDQ2ZDA",
  "price": "10,990.00",
  "id": "2"
},
{
  "createdAt": "2023-01-18T23:46:31.353Z",
  "brand": "LG 8 litres RO + UV + UF Water Purifier, WW184EPB with Mineral Booster, 2-in-1 Water Solution (Drinking + Fruit & Veggie Cleaning), Black",
  "image": "https://www.reliancedigital.in/medias/Karbonn-KJC70S-2024L-Washing-Machine-493627329-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTM1NXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGI5Lzk5MjgzMjI3NzcxMTguanBnfDRkNTI5YTlmMzUxYmFhMTk1NDQyNDE1OWU1MDI4NTY4ZGM0OTM0Yzc4YWE5ODI2MmNhNjE0NzljYTZiMDQ2ZDA",
  "price": "704.00",
  "id": "3"
},
{
  "createdAt": "2023-01-18T18:22:41.815Z",
  "brand": "Samsung 1.5 Ton 4 Star AR18BY4YATA Inverter Split AC,HD Filter, 2 Way Swing, Floral Design, 5 in 1 Convertible (2022 Launch)",
  "image": "https://www.reliancedigital.in/medias/Karbonn-KJC70S-2024L-Washing-Machine-493627329-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTM1NXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGI5Lzk5MjgzMjI3NzcxMTguanBnfDRkNTI5YTlmMzUxYmFhMTk1NDQyNDE1OWU1MDI4NTY4ZGM0OTM0Yzc4YWE5ODI2MmNhNjE0NzljYTZiMDQ2ZDA",
  "price": "39,890.00",
  "id": "4"
},
{
  "createdAt": "2023-01-18T11:42:07.745Z",
  "brand": "Sansui 7 Kg Semi Automatic Top Loading Washing Machine with 3 Wash Programs, JSP70S-2024L, Burgundy",
  "image": "https://www.reliancedigital.in/medias/Karbonn-KJC70S-2024L-Washing-Machine-493627329-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTM1NXxpbWFnZS9qcGVnfGltYWdlcy9oYjIvaGI5Lzk5MjgzMjI3NzcxMTguanBnfDRkNTI5YTlmMzUxYmFhMTk1NDQyNDE1OWU1MDI4NTY4ZGM0OTM0Yzc4YWE5ODI2MmNhNjE0NzljYTZiMDQ2ZDA",
  "price": "7,290.00",
  "id": "5"
},
{
  "createdAt": "2023-01-18T06:30:55.930Z",
  "brand": "Hisense 94 Litre 2 Star Single Door Refrigerator, Silver RR94D4SSN",
  "image": "https://www.reliancedigital.in/medias/Hisense-RR94D4SSN-Refrigerator-493627170-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDM2NnxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDZjLzk5MTY0MDc2MTE0MjIuanBnfGEzYThlMGUxZDc2ZWI2ZWE2ZjM4MmM5YTcwN2E2MTAxNTlmOTZmZGU3YWM0YjdmNzFlYzlhNTdhY2FjMjI0MGU",
  "price": "10,804.00",
  "id": "6"
},
{
  "createdAt": "2023-01-19T01:35:11.881Z",
  "brand": "Haier 0.9 Ton 3 Star QuriCool HSU10Q-TCW3B Triple Inverter Split AC with Copper Condenser, 50 Feet Airflow, Cools even at 60C, Hyper PCB, Self Clean Technology",
  "image": "https://www.reliancedigital.in/medias/Haier-HSU10Q-TCW3B-Air-Conditioners-581026821-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTAxOXxpbWFnZS9qcGVnfGltYWdlcy9oODEvaDUyLzk3NzM0NzU4ODkxODIuanBnfDVlOGIxYjI3ZmI3MTIyMWZiMzBjNTgzZDBmYTBjYzg4ZDE0M2UwZmUwYzlmZWEwOTg1ODBkOTk0NWE5ZDUzYmM",
  "price": "26,903.00",
  "id": "7"
},
{
  "createdAt": "2023-01-19T01:15:07.613Z",
  "brand": "Voltas Beko 195 Litre 2 Star Direct Cool Single Door Refrigerator, Belus Blue, RDC215DBBRX",
  "image": "https://www.reliancedigital.in/medias/Voltas-Beko-RDC215DBBRX-Refrigerator-492911097-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NDQ0NXxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDM3Lzk4Mzg4OTc1OTQzOTguanBnfDg5NDBhYmJlYTliNDFkMDlmY2ZkMThkMjYxZjAwNWZkMTU5ZTFkZDlmNmQ4YWIxNjQxMTA0OTFkZDUxOGI3MWU",
  "price": "20,555.00",
  "id": "8"
}
]

//FOR BOTTOMSECTION

let slideIndexOne = 1;
showSlidesOne(slideIndexOne)


function plusSlidesOne(n){
  showSlidesOne(slideIndexOne += n)
}
function currentSlide(n){
  showSlidesOne(slideIndexOne = n);
}
function showSlidesOne(n){
  let i;
  let slides1 = document.getElementsByClassName("container-bot")
  if(n>slides1.length){slideIndexOne=1}
  if(n<1){slideIndexOne=slides1.length}
  for(let i=0;i<slides1.length;i++){
    slides1[i].getElementsByClassName.display = "none"
  }
  slides1[slideIndexOne-1].getElementsByClassName.display = "block"
}

//CAROUSEL-3
let arr=[
  "https://www.reliancedigital.in/medias/Redmi-Note-12-5G-Series-NPI-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2MTM2M3xpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDZmLzk5NDQ5MDc0NDgzNTAuanBnfDY3MGJlYzc4OTFkYzE4Y2NlYTFhMTRjOTY0MjNkZGJlNzNmYzQ4MTkxYTkxODcyZjczZTllMTlmMjc2OGZkZDk",
  "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
  "https://www.reliancedigital.in/medias/Bose-Earbuds-NPI-Banner-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NjI4OHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDIzLzk5NDk5NjEzODgwNjIuanBnfDU5OTYxYmIzNjI3NDRkOGI0YzMwMGM4NmM2OGU0OTZmODRhMWRjYmMzM2ExMjRiMzRkOTM4M2Y4OGJlNmY4ZTc"
]
let prevB = document.querySelector(".prev")
var currentImageIndex1 = 0;
var currentImage1 = document.getElementById("current_image3");

let nexB = document.querySelector(".next")

previous.addEventListener("click",()=>{
  currentImageIndex1 = (currentImageIndex1 +arr.length - 1) % arr.length
 
  displayImage()
})
nex.addEventListener("click",()=>{
  currentImageIndex1 = (currentImageIndex1 +arr.length + 1) % arr.length
  displayImage()
})

displayImage()
function displayImage(){
  currentImage1.setAttribute("src",arr[currentImageIndex1])
 // console.log(currentImage1)
}
setInterval(() => {
  
  currentImageIndex1 = (currentImageIndex1 + 1) % arr.length
  displayImage()
}, 2000);

//FOR SEARCH






