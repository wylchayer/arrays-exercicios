const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const numeros = [4, 87, 41, 9, 219, 481, 116]
const strings = ['essa', 'é', 'uma', 'string', 'haha']
const ecletica = ['melancia', 7, false]

// a)
console.log(`Quantidade de elementos do array 'numeros':`, numeros.length)
console.log(`Quantidade de elementos do array 'strings':`, strings.length)
console.log(`Quantidade de elementos do array 'ecletica':`, ecletica.length)

// b)
console.log(`O primeiro item do array 'numeros' é: ${numeros[0]}.
O segundo item do array 'strings' é: ${strings[1]}.
O terceiro item do array 'ecletica' é: ${ecletica[0]}.`)

// c)
const verificaNumeros = numeros.includes(481)
const verificaStrings = strings.includes('HAHA')
console.log(`Array 'numeros' contém '481'?`, verificaNumeros)
console.log(`Array 'strings' contém 'HAHA'?`, verificaStrings)