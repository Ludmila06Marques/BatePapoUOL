/*
PROBLEMAS:
    -Como fazer o texto quebrar a linha quando chega no final da div
  
*/

document.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
      
       const btn=document.querySelector(".icone")
       btn.click();
      
    }
})


//Entrar na sala
function entrar(){
    const usuario = document.querySelector(".usuario-input").value
    const pessoa={name:usuario}
    const promise =axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',pessoa);
    console.log(promise)
    promise.then(entrarSucesso)
    promise.catch(entrarErro)    
}

        function entrarSucesso(response){
            const usuario = document.querySelector(".usuario-input").value
            if(usuario!==response.data){
                document.querySelector(".entrar").classList.add("escondido")
                document.querySelector(".entrei").classList.remove("escondido")       
               
            }else{
                entrarErro()
            }
            carregarMensagens()
   
        }
        function entrarErro(error){
            if(error.response.status ==400){
                const statusCode=error.response.status
                console.log(statusCode)
                alert("Usuario ja cadastrado. Tente outro nome!")             
            }

        }
 /*   

//Carregar mensagens        
function carregarMensagens(){
            alert("carregando mensagens")
            const promise= axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',mensagem)
            promise.then( enviarMensagemSucesso)
            promise.catch( enviarMensagemErro)
  
        }
               
   
    
//Manter conexao
//Manter conexao
setInterval(manterConexao(),5000)
function manterConexao(response){
    const usuario = document.querySelector(".usuario-input").value
    const pessoa={name:usuario}
    const promise =axios.post('https://mock-api.driven.com.br/api/v6/uol/status',pessoa);
    console.log(alert("Conectado"))

}
//setInterval(entrar,5000);


//Carregar mensagens


 
 function carregarMensagensSucesso(){
                    alert("carregando mensagens")
                }
                function carregarMensagensErro(){
                    
                    alert("deu ruim")
                }  
//Enviar mensagem
function enviarMensagem(){
    alert("enviando mensagens")
 

   const promise= axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',mensagem)
   promise.then( enviarMensagemSucesso)
   promise.catch( enviarMensagemErro)
}
        function enviarMensagemSucesso(){
            alert("enviando mensagens")

        }
        function enviarMensagemErro(){
            
        }
//----------------------------------------------------------------------------------
*/