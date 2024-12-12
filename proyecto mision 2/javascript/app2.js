const datos = JSON.parse(localStorage.getItem('promedios')) || [];
const tabla = document.getElementById('tablaResultados');
const limpiarTareas = document.getElementById('limpiarTareas');


datos.forEach(item => {
    const fila = document.createElement('tr');

    const claseColor = item.promedio >= 9 ? 'sobresaliente' : item.promedio >= 6 ? 'alta' : 'baja';
    
    fila.innerHTML = `<td>${item.nombre}</td><td class="${claseColor}">${item.promedio}</td>`;
    tabla.appendChild(fila);
});


limpiarTareas.addEventListener('click', () => {
    if (confirm('¿Está seguro de que desea borrar todas las notas?')) {

        localStorage.removeItem('promedios');
        tabla.innerHTML = '';
        alert('Todas las notas han sido eliminadas.');
    }
});
