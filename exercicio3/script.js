const numeros = [4, 87, 41, 9, 219, 481, 116]
const strings = ['essa', 'é', 'uma', 'string', 'haha']
const ecletica = ['melancia', 7, false]

const numerosCopia = numeros.slice()
const stringsCopia = strings.slice()
const ecleticaCopia = ecletica.slice()

// a)
numerosCopia.unshift(94)
console.log(`Original:`, numeros)
console.log(`Cópia:`, numerosCopia)

// b)
stringsCopia.pop()
console.log(`Original:`, strings)
console.log(`Cópia:`, stringsCopia)

// c)
ecleticaCopia.splice(1,1)
console.log(`Original:`, ecletica)
console.log(`Cópia:`, ecleticaCopia)