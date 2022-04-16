/*
PROBLEMAS:
    -Como fazer o texto quebrar a linha quando chega no final da div
  
*/
let usuario;

let receptor
let mensagem
let tipo
let hora


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
      conteudo.innerHTML+=` <div class="message ${type}">
    <span class="time">${time}</span>
    <span class="text">
        <span class="origem"><strong>${from}</strong> para <strong>${to}</strong></span>
        <span class="mensagem">${text}</span>
    </span>
</div>
    `
    }   
}

function carregarErro(){
    alert("deu ruim")
}
/*
function enviarMensagem(response){
    const mensagem = document.querySelector(".texto").value
    
    const texto={
        from:usuario,
        to:receptor,
        text:mensagem,
        type:tipo,
        time:hora
    }
    const promise=axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", texto)
    promise.then(enviarMensagemSucesso)
    promise.catch(enviarMensagemErro)  
}
function enviarMensagemSucesso(){
    alert("enviei")

}
function enviarMensagemErro(){
    alert("deu ruim")

}
*/


 
 
