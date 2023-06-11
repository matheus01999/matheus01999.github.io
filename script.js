//  VARIAVES 

//BARRA DE NAVEGAÇÃO
var navbar = document.getElementById('navbar')
var buttonopen = document.getElementById('buttonshow')
var buttonclose = document.getElementById('buttonhide')
var menu = document.getElementById('menu')

//HABILIDADES
var opcaocss = document.getElementById('skillCss')
var opcaojs = document.getElementById('skillJS')
var opcaocss = document.getElementById('skillCss')
var opcaoboot = document.getElementById('skillBoot')
var contentskill = document.getElementById('contentSkill')
var showskill = document.getElementById('showskill')

var contentcss = document.getElementById('contentcss')
var contentjs = document.getElementById('contentjs')
var contentboot = document.getElementById('contentboot')




//FUNÇOES

//BARRA DE NAVEGAÇÃO
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

//HABILIDADES

function closecontent(){
    contentskill.style.display = 'none'
    showskill.style.display = 'block'

    opcaojs.style.border = 'none'
    opcaojs.style.backgroundColor = '#394867'
    opcaojs.style.color = '#f1f6f9'

    opcaocss.style.border = 'none'
    opcaocss.style.backgroundColor = '#394867'
    opcaocss.style.color = '#f1f6f9'

    opcaoboot.style.border = 'none'
    opcaoboot.style.backgroundColor = '#394867'
    opcaoboot.style.color = '#f1f6f9'
    
}

function cleanskill(){
    contentjs.style.display = 'none'
    contentcss.style.display = 'none'
    contentboot.style.display = 'none'
    contentskill.style.display ='none'

    opcaojs.style.border = 'none'
    opcaojs.style.backgroundColor = '#394867'
    opcaojs.style.color = '#f1f6f9'

    opcaocss.style.border = 'none'
    opcaocss.style.backgroundColor = '#394867'
    opcaocss.style.color = '#f1f6f9'

    opcaoboot.style.border = 'none'
    opcaoboot.style.backgroundColor = '#394867'
    opcaoboot.style.color = '#f1f6f9'

    showskill.style.display = 'none'

}

function skilljs(){
    cleanskill()
    opcaojs.style.border = '2px solid #394867' 
    opcaojs.style.backgroundColor = '#F1F6F9'
    opcaojs.style.color = '#394867'
    opcaojs.style.transitionDuration =' 1s'
    contentskill.style.display = 'block'
    contentjs.style.display = 'block'


}


function skillcss(){
    cleanskill()
    opcaocss.style.border = '2px solid #394867' 
    opcaocss.style.backgroundColor = '#F1F6F9'
    opcaocss.style.color = '#394867'
    opcaocss.style.transitionDuration =' 1s'
    contentskill.style.display = 'block'
    contentcss.style.display = 'block'
    

}

function skillboot(){
    cleanskill()
    opcaoboot.style.border = '2px solid #394867' 
    opcaoboot.style.backgroundColor = '#F1F6F9'
    opcaoboot.style.color = '#394867'
    opcaoboot.style.transitionDuration =' 1s'
    contentskill.style.display = 'block'
    contentboot.style.display ='block'
    

}

