const typed = new Typed('.typed', {
    strings: ['', 'Desarrollador Web;', 'Ingeniero Sofware;', ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    // shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1700, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    //loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

const openTabSkills = () => {
    EXPERIENCE.classList.remove("active-link")
    experience.classList.remove("active-tab")

    EDUCATION.classList.remove("active-link")
    education.classList.remove("active-tab")

    SKILLS.classList.add("active-link")
    skills.classList.add("active-tab")
}
const openTabExperience = () => {
    SKILLS.classList.remove("active-link")
    skills.classList.remove("active-tab")

    EDUCATION.classList.remove("active-link")
    education.classList.remove("active-tab")

    EXPERIENCE.classList.add("active-link")
    experience.classList.add("active-tab")
}
const openTabEducation = () => {
    SKILLS.classList.remove("active-link")
    skills.classList.remove("active-tab")

    EXPERIENCE.classList.remove("active-link")
    experience.classList.remove("active-tab")

    EDUCATION.classList.add("active-link")
    education.classList.add("active-tab")
}
// ------- BOTONES -----------
const SKILLS = document.getElementById("SKILLS")
const EXPERIENCE = document.getElementById("EXPERIENCE")
const EDUCATION = document.getElementById("EDUCATION")
// ----------- CONTENIDO -----------
const skills = document.getElementById("skills")
const experience = document.getElementById("experience")
const education = document.getElementById("education")
// -----------EVENTOS CLICKS------------
SKILLS.addEventListener('click', openTabSkills)
EXPERIENCE.addEventListener('click', openTabExperience)
EDUCATION.addEventListener('click', openTabEducation)

