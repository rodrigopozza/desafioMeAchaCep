


  function resultadoCep (dadosCep){
        for ( let campo in dadosCep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dadosCep[campo];
            }
        }
        
    }


  let dadosCep = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json`;
    try{
        let dadosFetch = await fetch(url);
        let dadosJson =  await dadosFetch.json();
        resultadoCep(dadosJson)
    }catch(error){
        alert(error);
    }
   
   
            
}


    const btn = document.querySelector('#buscar');
    const cep = document.querySelector('#cep');
    const logadouro = document.querySelector('#logadouro');
    const bairro = document.querySelector('#bairro');
    const localidade = document.querySelector('#localidade');

     
       
  
   function botao(){ btn.addEventListener('click', function(){
        dadosCep(cep.value);
    })     
} botao()


  export { resultadoCep, dadosCep, btn, cep , localidade, logadouro, bairro, botao};
