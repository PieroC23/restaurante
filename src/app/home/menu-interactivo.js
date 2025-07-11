// Imágenes de los platos
const lunesEntradas = [
  'src/assets/lunes/Sopadepollocon verduras.jpeg',        // Sopa de pollo con verduras
  'src/assets/lunes/Tequeños.jpeg',       // Tequeños
  'src/assets/lunes/ensaladafresca.jpeg' // Ensalada fresca
];

const lunesSegundos = [
  'src/assets/lunes/arroz a la cubana.jpeg',        // Estofado de pollo
  'img/lentejas.jpg',        // Lentejas con chuleta o milanesa
  'img/arroz_cubana.jpg',    // Arroz a la cubana
  'img/milanesa_papas.jpg',  // Milanesa o chuleta con papas doradas
  'img/pollo_plancha.jpg'    // Pollo a la plancha con papa sancochada
];

// Función para cambiar las imágenes
let entradaIndex = 0;
let segundoIndex = 0;

function changeImage(category, direction) {
  if (category === 'entrada') {
    entradaIndex += direction;
    if (entradaIndex < 0) entradaIndex = lunesEntradas.length - 1;
    if (entradaIndex >= lunesEntradas.length) entradaIndex = 0;
    document.getElementById('entradaImage').src = lunesEntradas[entradaIndex];
  } else if (category === 'segundo') {
    segundoIndex += direction;
    if (segundoIndex < 0) segundoIndex = lunesSegundos.length - 1;
    if (segundoIndex >= lunesSegundos.length) segundoIndex = 0;
    document.getElementById('segundoImage').src = lunesSegundos[segundoIndex];
  }
}
