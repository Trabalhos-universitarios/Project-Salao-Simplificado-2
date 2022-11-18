var form = document.getElementById('form');
var resposta = document.getElementById('resposta');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("envia-formulario");

    var dados = new FormData(form);

    console.log(dados);
    console.log(dados.get('email'));
    console.log(dados.get('senha'));

    fetch('http://localhost/salao/login.php', {
            method: 'POST',
            body: dados
        })
        .then(res => res.json())
        .then(data => {
            if (data === 'error') {
                resposta.innerHTML = `
                <div class="alerta-erro">
                    Preencha todos os campos
                </div>
                `
            } else {           
                console.log(data)
                resposta.innerHTML = `
                <div class="alerta-sucesso">
                    <p style="color: Green;">Login efetuado com sucesso!</p>
                </div>
                `
                window.location.href = "homeLogin.html";
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