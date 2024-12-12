document.addEventListener('DOMContentLoaded', () => {
    
    const miBoton = document.getElementById('miBoton');
    const tareas = document.getElementById('tareas');
    const limpiarTareas = document.getElementById('limpiarTareas');

    
    miBoton.addEventListener('click', () => {
        
        const nombre = document.getElementById('nombre').value.trim();
        const Ingles = parseFloat(document.getElementById('Ingles').value.trim());
        const Matematicas = parseFloat(document.getElementById('Matematicas').value.trim());
        const Espanol = parseFloat(document.getElementById('Espanol').value.trim());
        const social = parseFloat(document.getElementById('social').value.trim());
        const eti = parseFloat(document.getElementById('eti').value.trim());
        const reli = parseFloat(document.getElementById('reli').value.trim());       
        const EducacionFisica = parseFloat(document.getElementById('EducacionFisica').value.trim());

        if (!nombre || isNaN(Ingles) || isNaN(Matematicas) || isNaN(EducacionFisica) || isNaN(Espanol) || isNaN(social) || isNaN(eti)|| isNaN(reli)) {
            alert('Por favor, complete todos los campos con datos válidos.');
            return;
        }

        if (Ingles > 10 || Matematicas > 10 || EducacionFisica > 10 || Espanol > 10 || eti > 10 || reli > 10 ) {
            alert('Error: Las notas deben ser valores entre 0 y 10.');
            return;
        }

        const promedio = ((Ingles + Matematicas + EducacionFisica + Espanol + social+ eti+ reli) / 7).toFixed(2);

        window.location.href = `resultado.html?nombre=${encodeURIComponent(nombre)}&promedio=${promedio}`;


         const datos = JSON.parse(localStorage.getItem('promedios')) || [];
         datos.push({ nombre, promedio });
         localStorage.setItem('promedios', JSON.stringify(datos));


         window.location.href = 'resultado.html';
        

        const li = document.createElement('li');
        li.textContent = `${nombre} - Promedio: ${promedio}`;
        tareas.appendChild(li);

        
        document.getElementById('nombre').value = '';
        document.getElementById('Ingles').value = '';
        document.getElementById('Matematicas').value = '';
        document.getElementById('EducacionFisica').value = '';
        document.getElementById('Espanol').value = '';
        document.getElementById('social').value = '';
        document.getElementById('eti').value = '';
        document.getElementById('reli').value = '';
    });

    
    tareas.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('resaltado');
        }
    });

    
    limpiarTareas.addEventListener('click', () => {
        if (confirm('¿Está seguro de que desea borrar todas las tareas?')) {
            tareas.innerHTML = '';
        }
    });
});

