// BARRA DE NAVEGAÇÃO
var menubotao = document.getElementById('buttonMenu')
var verticalmenu = document.getElementById('menuvertical')
var nav = document.getElementById('nav')

// BOTOES DE HABILIDADES

//selecionando os botoes
var opcaojs = document.getElementById('skillJS')

//conteudo dos botoes
var contentskill = document.getElementById('contentSkill')


function showmenu(){
    menubotao.style.display = 'none'
    verticalmenu.style.display = 'block'
    nav.style.height = '0%'
       
}

function hidemenu(){
    menubotao.style.display = 'block'
    verticalmenu.style.display = 'none'
    nav.style.height = '50px'

}

function jsbutton(){
    opcaojs.style.border = '2px solid #394867'
    opcaojs.style.backgroundColor = '#F1F6F9'
    opcaojs.style.color = '#394867'
    opcaojs.style.transitionDuration =' 1s'


    contentskill.style.display = 'block'



    

}