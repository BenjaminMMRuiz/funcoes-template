// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//function imprimirNome (nome){
  //bloco de codigo
  //console.log(`Olá, ${nome}`)

    //imprimirNome(`Cenoura`)
    //imprimirNome(`Benjamin`)
    //imprimirNome(`Abobora`)

//}
    const imprimirNome = function(nome){
    console.log(`Olá, ${nome}`)
        
      }

      
    imprimirNome("Cenoura")
    imprimirNome("Benjamin")
    imprimirNome("Abobora")

   

    const fazendoOperacoes = (numero) => {
       const verifica = numero % 2 === 0
       const soma = numero + 10
       const multiplica = numero * numero

       return(`numero ${numero} é par? ${verifica}. somado com 10 o resultado é ${soma}. 
       Multiplicado por ele mesmo o resulatado é ${multiplica}`)
    }

console.log(fazendoOperacoes(12))

///-------------------

const verificaDados = (login, senha) => {
const loginArmazenado = "benj@mail.com"
const senhaArmazenada = "123456"

return loginArmazenado === login && senhaArmazenada === senha

}

console.log(verificaDados("benj@mail.com", "123456"))

