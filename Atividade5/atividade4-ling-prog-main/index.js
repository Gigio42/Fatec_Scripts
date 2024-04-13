/* Crie funções que devem ter como parâmetro uma propriedade “lista” que vai receber um array com vários números, as funções devem ser criadas para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20
Uma função que vai devolver o primeiro e o último valor da lista
*/
function valoresMaioresQueMedia(lista) {
  // ### Escreva Seu código aqui :) ###
  let media = somaDosItens(lista) / lista.length
  let maiores = lista.filter(item => item > media)
  console.log(`> Maiores que a média (${media}): ${maiores}`);
  return maiores;
  // ### FIM do código ###
}

function menorValor(lista) {
  // ### Escreva Seu código aqui :) ###
  let menor = Math.min(...lista)
  console.log(`> Menor da lista: ${menor}`)
  return menor
  // ### FIM do código ###
}

function somaDosItens(lista) {
  // ### Escreva Seu código aqui :) ###
  let soma = lista.reduce((acc, att) => acc + att)
  console.log(`> Soma da lista: ${soma}`)
  return soma
  // ### FIM do código ###
}

function valoresMenoresQue20(lista) {
  // ### Escreva Seu código aqui :) ###
  let val = lista.filter(item => item < 20)
  console.log(`> Valores menores que 20: ${val}`)
  return val
  // ### FIM do código ###
}

function primeiroEUltimo(lista) {
  // ### Escreva Seu código aqui :) ###
  console.log(`> Primeiro elemento: ${lista[0]}`)
  console.log(`Ultimo elemento: ${lista[lista.length - 1]}`)
  return [lista[0], lista[lista.length - 1]]
  // ### FIM do código ###
}

/* ==== Não apagar ==== */
module.exports = {
  valoresMaioresQueMedia,
  menorValor,
  somaDosItens,
  valoresMenoresQue20,
  primeiroEUltimo
}
