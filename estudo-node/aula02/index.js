/*
Obter o número de telefone de um usuário a partir de seu id
Obter um usuário
Obter o endereço do usuário pelo id
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome:"Aladin",
            dataNascimento: new Date()
        })
    },1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '999999999',
            ddd: 11
        })
    },2000)
}

function obterEndereco(idUsuario){

}

function resolverUsuario(erro,usuario){
    console.log('usuario',usuario);
}

obterUsuario(function resolverUsuario(error, usuario){
    if (error) {
        console.error('Deu ruim em USUARIO', error);
        return;
    }
});

obterTelefone(function resolverTelefone(error1, telefone){
    if (error) {
        console.error('Deu ruim em TELEFONE', error);
        return;
    }
})

const usuario = obterUsuario();
const telefone = obterTelefone();


// console.log('telefone',telefone);