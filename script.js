const { default: axios } = require("axios")

function validate() {
    const tokenInsired = document.getElementById('input-token').value
    const tokenInsiredObject = {
        token: tokenInsired
    }
    divPrimary = document.getElementsByClassName('div-primary')
    divForm = document.getElementsByClassName('form')
    divPrimary[0].style.width = '50vw'
    // divForm[0].style.border = 'solid 1px black'
    divForm[0].style.paddingLeft = '1vw'
    formPrimary = document.getElementsByTagName('form')

    api.post('http://localhost:8080/api/validatetoken', tokenInsiredObject)
        .then(response => {
            // Se a requisição for bem-sucedida, a resposta estará disponível aqui
            console.log('teste');
        })
        .catch(error => {
            // Se ocorrer algum erro na requisição, ele estará disponível aqui
            console.error('Erro:', error);
        });

    const conteudo = `<p>Certificamos que no dia 10 de dezembro de 2024 o aluno HUGO AMADIO PETRUZ concluiu o mini curso MUNDO WEB com o professor HUGO AMADIO PETRUZ desenvolvendo habilidades na compreensão do funcionamento de sistemas web</p>`
    divForm[0].innerHTML = conteudo
}