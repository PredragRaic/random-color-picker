const bacgroundF = (r, g, b) =>{
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



  let clear;
    
  document.querySelector('#start').addEventListener('click', function(){
      
   clear = setInterval(function () {
        document.querySelector('#majn').style.backgroundColor = bacgroundF();
       
    }, 1000);
})
  document.querySelector('#stop').addEventListener('click', function(){
      
    clearInterval(clear);
})

