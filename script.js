// BARRA DE NAVEGAÇÃO
var navbar = document.getElementById('navbar')
var buttonopen = document.getElementById('buttonshow')
var buttonclose = document.getElementById('buttonhide')


var menu = document.getElementById('menu')

function showmenu(){
    menu.style.display = 'block'
    buttonclose.style.display = 'block'
    buttonopen.style.display = 'none'
    navbar.style.height = '0%'
}

function hidemenu(){
    menu.style.display = 'none'  
    buttonopen.style.display = 'block'
    navbar.style.height = '50px'
    

}

// BOTOES DE HABILIDADES

//selecionando os botoes
var opcaojs = document.getElementById('skillJS')

//conteudo dos botoes
var contentskill = document.getElementById('contentSkill')




function jsbutton(){
    opcaojs.style.border = '2px solid #394867' 
    opcaojs.style.backgroundColor = '#F1F6F9'
    opcaojs.style.color = '#394867'
    opcaojs.style.transitionDuration =' 1s'


    contentskill.style.display = 'block'

    



    

}