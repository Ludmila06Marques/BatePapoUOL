/*PROBLEMAS
-Manter conexao 
-Scroll horizontal

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
                carregarMsg()     
               
            }else{
                entrarErro()
            }
          
   
        }
        function entrarErro(error){
            if(error.response.status ==400){
                const statusCode=error.response.status
                console.log(statusCode)
                alert("Usuario ja cadastrado. Tente outro nome!")             
            }
            
        }
//Carregar mensagens 
function carregarMsg(){
    let promise=axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promise.then(carregarSucesso)
    promise.catch(carregarErro)
}
        function carregarSucesso(response){
        
            console.log(carregarSucesso)
            for(let i=0 ;i<response.data.length; i++){
                const to=response.data[i].to
                const from=response.data[i].from
                const type= response.data[i].type
                const time=response.data[i].time
                const text=response.data[i].text
                let conteudo=document.querySelector(".conteudo")
                console.log(conteudo.innerHTML)
            conteudo.innerHTML+=` <div class="msg ${type}">
            <span class="time">${time}</span>
            <span class="text">
                <span class="origem"><strong>${from}</strong> para <strong>${to}:</strong></span>
                <span class="mensagem">${text}</span>
            </span>
        </div>
            `
            }   
        }

        function carregarErro(){
            alert("deu ruim")
        }
setInterval(carregarMsg(),4000)
//Enviar mensagem
function enviarMensagem(){
    const texto= document.querySelector(".texto").value
    const mensagem={
        from:document.querySelector(".usuario-input").value ,
        to: "Todos",
        text: document.querySelector(".texto").value,
        type: "message" 
    }
    const promise= axios.post('https://mock-api.driven.com.br/api/v6/uol/messages',mensagem)
    promise.then(enviarMensagemSucesso)
    promise.catch(enviarMensagemErro)
    console.log(mensagem)
   
   
}
function enviarMensagemSucesso(){
    alert("enviei")
    carregarMsg()

}
function enviarMensagemErro(error){
    if(error.response.status ==400){
        const statusCode=error.response.status
        alert("oops...Deu ruim")     
    }

 
}



 
 
