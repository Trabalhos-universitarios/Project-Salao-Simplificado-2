
var form = document.getElementById('form');
var resposta = document.getElementById('resposta');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("envia-formulario");

    var dados = new FormData(form);

    console.log(dados);
    console.log(dados.get('nome'));
    console.log(dados.get('email'));
    console.log(dados.get('telefone'));
    console.log(dados.get('senha'));
    console.log(dados.get('confirmarSenha'));

    fetch('http://localhost/salao/registration.php', {
        method: 'POST',
        body: dados
    })
        .then( res=> res.json())   
        .then( data => {
            console.log(data)
            if(data === 'error'){
                resposta.innerHTML = `
                <div class="alerta-erro">
                    <p style="color: red;">Sem conexão com o banco de dados</p>
                </div>
                `
            }else {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = "login.html";
            }
        })
        .catch(err => {
            console.log(err)
            resposta.innerHTML = `
            <div class="alerta-erro">
                <p style="color: red;">Servidor indisponivel</p>
            </div>
            `
        })
});

