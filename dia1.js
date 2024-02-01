// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
// Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]


export default function contarOvejas(ovejas) {
    const ovejasFiltradas = ovejas.filter(function(value){
     return value.name.toLowerCase().includes('n') && value.name.toLowerCase().includes('a') && value.color.includes('rojo')
    });
    return ovejasFiltradas;
  }


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

