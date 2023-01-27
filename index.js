const typed = new Typed('.typed', {
    strings: ['','Web','Front-end' ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 85, // Velocidad en mlisegundos para poner una letra,
    startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 85, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    // shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 400, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    //loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

const openMenu = () => {
    sideMenu.style.display = 'block'
}
const closeMenu = () => {
    sideMenu.style.display = 'none'
}

const sideMenu = document.getElementById('sidemenu')
const burger = document.getElementById('burger')
const close = document.getElementById('close')

close.addEventListener('click', closeMenu)
burger.addEventListener('click', openMenu)




const openTabExperience = () => {

    EDUCATION.classList.remove("active-link")
    education.classList.remove("active-tab")

    EXPERIENCE.classList.add("active-link")
    experience.classList.add("active-tab")
}
const openTabEducation = () => {
    EXPERIENCE.classList.remove("active-link")
    experience.classList.remove("active-tab")

    EDUCATION.classList.add("active-link")
    education.classList.add("active-tab")
}
// ------- BOTONES -----------
const EXPERIENCE = document.getElementById("EXPERIENCE")
const EDUCATION = document.getElementById("EDUCATION")
// ----------- CONTENIDO -----------

const experience = document.getElementById("experience")
const education = document.getElementById("education")
// -----------EVENTOS CLICKS------------

EXPERIENCE.addEventListener('click', openTabExperience)
EDUCATION.addEventListener('click', openTabEducation)

