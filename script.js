let menutoggle = document.querySelector('.toggle');
       
menutoggle.addEventListener('click', () =>{
    menutoggle.classList.toggle('active');
});
var sidemenu = document.getElementById('sidemenu');

menutoggle.addEventListener("click", ()=>{
    if(sidemenu.style.right === "0px"){
        sidemenu.style.right = "-300px";
    }
    else{
        sidemenu.style.right = "0px";
    }
});