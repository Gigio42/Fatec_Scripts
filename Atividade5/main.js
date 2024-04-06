//Random Array para teste
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}
console.log(array);

function maioresDaMedia(lista) {
    let media = soma(lista) / lista.length
    let maiores = lista.filter(item => item > media)
    console.log(`> Maiores que a média (${media}): ${maiores}`);
    return maiores;
}

function menor(lista) {
    let menor = Math.min(...lista)
    console.log(`> Menor da lista: ${menor}`)
    return menor
}

function soma(lista) {
    let soma = lista.reduce((acc, att) => acc + att)
    console.log(`> Soma da lista: ${soma}`)
    return soma
}

function menoresQue20(lista)
{
    let val = lista.filter(item => item < 20)
    console.log(`> Valores menores que 20: ${val}`)
    return val
}

function primeiroUltimo(lista) {
    console.log(`> Primeiro elemento: ${lista[0]}`)
    console.log(`Ultimo elemento: ${lista[lista.length - 1]}`)
    return [lista[0], lista[lista.length - 1]]
}

maioresDaMedia(array)
menor(array)
menoresQue20(array)
primeiroUltimo(array)

console.log()