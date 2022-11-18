
function getEmployeeScale() {
    console.log("redireciona");
    fetch('http://localhost/salao/getEmployeeScale.php', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => {
            console.log(err)
        })
}

var form = document.getElementById('form');
var resposta = document.getElementById('resposta');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("envia-formulario");

    var dados = new FormData(form);

    console.log(dados.get('cliente'));
    console.log(dados.get('funcionario'));
    console.log(dados.get('dataAg'));
    console.log(dados.get('hora'));

    fetch('setSchedule.php', {
        method: 'POST',
        body: dados
    })
        .then( res => res.json())   
        .then( data => {
            if(data === 'error'){
                resposta.innerHTML = `
                <div class="alerta-erro">
                    <p style="color: red;">Sem conexão com o banco de dados</p>
                </div>
                `
            }else {
                console.log(data)
                alert("Agendadmento realizado com sucesso!");
    
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



    



