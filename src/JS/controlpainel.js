function registerAluno() {

    const title = document.getElementsByClassName('title-crud')
    const titleContent = "Registrar Alunos"
    title[0].innerHTML = titleContent
    const formRegister = document.getElementsByClassName('form-register')
    formRegister[0].style.display = 'block'
}

function updateAluno() {
    const title = document.getElementsByClassName('title-crud')
    const titleContent = "Editar Alunos"
    title[0].innerHTML = titleContent
}


function deleteAluno() {
    const title = document.getElementsByClassName('title-crud')
    const titleContent = "Excluir Alunos"
    title[0].innerHTML = titleContent
}