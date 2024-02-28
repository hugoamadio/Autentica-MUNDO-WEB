document.getElementById("validate-form").addEventListener("submit", async function (event) {
    event.preventDefault()
    var tokenInsired = document.getElementById("input-token").value

    try {
        const response = await api.post(`http://localhost:8080/api/validatetoken/${tokenInsired}`)
        const responseFormat = response.data

        const divPrimary = document.getElementsByClassName('div-primary')
        const divForm = document.getElementsByClassName('form')
        divPrimary[0].style.width = '50vw'
        divForm[0].style.paddingLeft = '1vw'
        divForm[0].style.color = 'Black'

        const nomeCompleto = responseFormat.name[0]
        const data = responseFormat.data[0]
        const objectData = new Date(data)
        const dia = objectData.getDate()
        const mesNumero = objectData.getMonth()
        const ano = objectData.getFullYear()

        const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

        const mesNome = nomesMeses[mesNumero]

        const conteudo = `<p>Certificamos que no dia ${dia} de ${mesNome} de ${ano} o aluno ${nomeCompleto} concluiu o mini curso MUNDO WEB com duração de 8 horas, com o professor HUGO AMADIO PETRUZ desenvolvendo habilidades na compreensão do funcionamento de sistemas web</p>`

        divForm[0].innerHTML = conteudo

    } catch (error) {
        console.log("Erro", error)
    }
})
