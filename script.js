// Tecnologia selecionada
var selecionacss = document.getElementById('selcss')

// Campo com conteudo sobre a tecnologia selecionada
var contentcss = document.getElementById('meucss')

// Funçãoes que mostra informações sobre a linguagem
function showcss(){
    contentcss.style.display = 'block'
}


// Função que zera o DOM
function unselected(){
    contentcss.style.display = 'none'
}