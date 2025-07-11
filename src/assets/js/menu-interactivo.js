// Imágenes y nombres para el menú interactivo por día
const lunesEntradas = [
  { image: 'assets/lunes/Sopadepollocon verduras.jpeg', name: 'Sopa de pollo con verduras' },
  { image: 'assets/lunes/Tequeños.jpeg', name: 'Tequeños' },
  { image: 'assets/lunes/ensaladafresca.jpeg', name: 'Ensalada fresca' }
];

// Datos similares para otros días...

// Función para cambiar la imagen y el nombre del plato según el día y categoría
function changeImage(dayCategory, direction) {
  let day = dayCategory.split('-')[0];  // Obtener el día (lunes, martes, etc.)
  let category = dayCategory.split('-')[1];  // Obtener la categoría (entrada o segundo)

  let index = 0;

  // Datos para cada día
  let dayData = {
    lunes: { entradas: lunesEntradas, segundos: lunesSegundos },
    // Otros días...
  };

  if (category === 'entrada') {
    index = dayData[day].entradas.findIndex(item => item.image === document.getElementById(`${dayCategory}-image`).src);
    index += direction;

    // Ciclo infinito
    if (index < 0) index = dayData[day].entradas.length - 1;
    if (index >= dayData[day].entradas.length) index = 0;

    document.getElementById(`${dayCategory}-image`).src = dayData[day].entradas[index].image;
    document.getElementById(`${dayCategory}-name`).textContent = dayData[day].entradas[index].name;
  }

  if (category === 'segundo') {
    index = dayData[day].segundos.findIndex(item => item.image === document.getElementById(`${dayCategory}-image`).src);
    index += direction;

    // Ciclo infinito
    if (index < 0) index = dayData[day].segundos.length - 1;
    if (index >= dayData[day].segundos.length) index = 0;

    document.getElementById(`${dayCategory}-image`).src = dayData[day].segundos[index].image;
    document.getElementById(`${dayCategory}-name`).textContent = dayData[day].segundos[index].name;
  }
}
