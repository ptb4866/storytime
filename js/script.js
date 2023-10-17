
const searchicon = document.getElementById('search-icon')
const searchfield = document.getElementById('search-field')
const menubtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const hero = document.getElementById('hero')
const programs = document.getElementById('programs')
const programslist = document.getElementById('programs-list')


//Search ICON Toggle
searchicon.addEventListener('mouseover',() => {

    searchicon.classList.toggle("hide") 
    searchfield.classList.toggle("hide") 
     

} )



//Menu Mobile/Desktop Toggle 
menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
    hero.classList.toggle('hidden')
})









