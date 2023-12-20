var font1 = document.getElementById("btn1")
var font2 = document.getElementById("btn2")
var font3 = document.getElementById("btn3")
var font4 = document.getElementById("btn4")
var par1 = document.getElementById("text1")
var par2 = document.getElementById("text2")
var span = document.getElementById("sp")
par1.addEventListener("keydown" , (event)=>{
            par2.innerHTML = par1.value
})



font1.onclick = ()=>{
     par2.className = "ch1"
     span.innerHTML = font1.innerHTML
}

font2.onclick = ()=>{
     par2.className = "ch2"
     span.innerHTML = font2.innerHTML
}

font3.onclick = ()=>{
     par2.className = "ch3"
     span.innerHTML = font3.innerHTML
}

font4.onclick = ()=>{
     par2.className = "ch4"
     span.innerHTML = font4.innerHTML
}