
let counter=0;
function count(){
    counter++;
    document.querySelector(`#mostrador`).innerHTML= 'Contador é: ' + counter /*retorna o 1 elemento que acha com essa id */
    if(counter % 5 === 0){
        alert(`contador agora é :  ${counter}`)    /*  ` é usada pra formatar textos em javascript colocando o valor da variavel */

    }
}
document.addEventListener('DOMContentLoaded',function(){/* DOMContenLoaded espera carregar paagina toda, e executa a function que é o 2 parametro passado */
    document.querySelector('button').onclick = count /* nao esta chamando a funcao count aí. Só somente quando clicar no botao,ai sim chama funcao count()*/
    /*document.querySelector('button').addEventListener('click',count)        outra forma de ser feito*/
})


