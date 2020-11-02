const body = document.querySelector('body')
const logo = document.querySelector('.navbar__logo');
const burger = document.querySelector('.navbar__burger');
const menuMobil = document.querySelector('.navbar__mobil')
const navbarDesk = document.querySelector('nav');


body.classList.add('light');

burger.addEventListener('click', Mostrar)

function Mostrar(){
    navbarDesk.classList.toggle('active');
    logo.classList.toggle('active')
    console.log('mostrar')
    menuMobil.classList.toggle('active');
    burger.classList.toggle('close');
   
    
    if(logo.classList.contains('active')){

        logo.innerHTML = '<img src="./img/logo.png" alt="" srcset="">';
        body.style.overflow = 'hidden';
    }else{
        logo.innerHTML = '<img src="./img/logo2.png" alt="" srcset="">'
        body.style.overflow = 'scroll';
    }

    if(navbarDesk.classList.contains('active')){

    }
    
}

let firstUbication = window.pageYOffset; 
window.onscroll = function (){
    let currentUbication = window.pageYOffset; 
    if (firstUbication >= currentUbication) {
        // se muestra
        navbarDesk.style.top = '0';
        navbarDesk.style.background ='white';
    } else {
        // se esconde 
        navbarDesk.style.top = '-50px';
        navbarDesk.style.background ='none';
    }
    firstUbication = currentUbication;
}



/*
Pseudo codigo

1. debemos tener en cuenta que estamos en modo light
2. si queremos el modo oscuro estamos en modo dark 

3. cuando abrimos el menu siempre sera oscuro

*/ 

function myFunction(x) {
    if (!(x.matches)) { // If media query matches
        console.log('no es responsive')
        

    } else {
      console.log('esta responsive')
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes