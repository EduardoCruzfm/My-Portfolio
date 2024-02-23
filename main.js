//#region 

window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    // toggle -> Activa como un swich ON - Off
    header.classList.toggle("abajo",this.window.scrollY > 0);

});

//#endregion

