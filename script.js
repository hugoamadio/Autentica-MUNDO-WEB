function validate() {
    divPrimary = document.getElementsByClassName('div-primary')
    divForm = document.getElementsByClassName('form')
    divPrimary[0].style.width = '50vw'
   // divForm[0].style.border = 'solid 1px black'
    divForm[0].style.paddingLeft = '1vw'
    formPrimary = document.getElementsByTagName('form')


    const conteudo = `<p>Certificamos que no dia 10 de dezembro de 2024 o aluno HUGO AMADIO PETRUZ concluiu o mini curso MUNDO WEB com o professor HUGO AMADIO PETRUZ desenvolvendo habilidades na compreensão do funcionamento de sistemas web</p>`
    divForm[0].innerHTML = conteudo
}