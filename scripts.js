
const botonBars = document.getElementsByClassName("nav-bars") // Retorna una coleccion.
const navMenu = document.getElementsByClassName("nav-menu") // Retorna una coleccion.

botonBars[0].addEventListener( 'click', () => {
    navMenu[0].classList.toggle("show_items");

    if (botonBars[0].getAttribute("data-visible") == 'no') {
        botonBars[0].setAttribute("data-visible", 'si')
    } else {
        botonBars[0].setAttribute("data-visible", 'no');
    }

    console.log(botonBars[0].getAttribute("data-visible"));
})

