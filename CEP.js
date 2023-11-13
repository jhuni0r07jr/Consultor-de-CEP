function Consultar(){
    let CEP = document.getElementById('cep').value;
    let RUA = document.getElementById('Rua');    
    let BAIRRO = document.getElementById('Bairro');
    let CIDADE = document.getElementById('Cidade');
    let ESTADO = document.getElementById('Estado');


    if(CEP.length !== 8){
        alert("Erro, digite o CEP corretamente, para que possa ser emitido a pesquisa.")
    }

    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then(conteudo => conteudo.json())
        .then(endereco =>{
        RUA.value = endereco.logradouro;
        BAIRRO.value = endereco.bairro;
        CIDADE.value = endereco.localidade;
        ESTADO.value = endereco.uf;
    });
}