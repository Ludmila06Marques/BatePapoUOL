
  
//Entrar na sala
function entrar(){
    document.querySelector(".entrar").classList.add("escondido")
    document.querySelector(".entrei").classList.remove("escondido")
    let usuario = document.querySelector(".usuario-input").value
    let pessoa={nome:usuario}
    const promise =axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ',pessoa);
    promise.then(entrarSucesso)
    promise.catch(entrarErro)
}

        function entrarSucesso(){
            console.log(alert("entrando..."))
            carregarMensagens()
            
        }
        function entrarErro(error){
            if(error.responde.status ===400){
                alert("Usuario ja cadastrado. Tente outro nome!")
                entrar();
            }

        }
//Manter conexao
//setInterval(entrar,5000);

//Carregar mensagens
function carregarMensagens(){
    const promise= axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')

}
        function carregarMensagensSucesso(){

        }
        function carregarMensagensErro(){
            
        }

//Enviar mensagem
function enviarMensagem(){

   const promise= axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',mensagem)

}
        function enviarMensagemSucesso(){

        }
        function enviarMensagemErro(){
            
        }