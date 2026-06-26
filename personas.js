const form = document.getElementById("form-personas");
const tbody = document.querySelector("#tabla-personas tbody");

const inputsNumeros = document.querySelectorAll('input[type="number"]');
inputsNumeros.forEach(input => {
    input.addEventListener('keydown', (evento) => {
        if (['e', 'E', '+', '-'].includes(evento.key)) {
            evento.preventDefault();
        }
    });
});

// Validacion simple: Chequea que el texto solo tenga letras, espacios y acentos
const validarSoloLetras = (texto) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
};

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const formData = new FormData(form);
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const edad = formData.get("edad");
    const altura = parseFloat(formData.get("altura"));
    const peso = parseFloat(formData.get("peso"));

    if (!validarSoloLetras(nombre) || nombre === "") {
        alert("El nombre solo debe contener letras.");
        return;
    }

    if (!validarSoloLetras(apellido) || apellido === "") {
        alert("El apellido solo debe contener letras.");
        return;
    }

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("El peso y la altura deben ser numeros validos.");
        return;
    }
    
    const imc = (peso / (altura * altura)).toFixed(2);
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura} m</td>
        <td>${peso} kg</td>
        <td>${imc}</td>
        <td><button class="btn-eliminar">Eliminar</button></td>
    `;
    
    tbody.appendChild(tr);
    form.reset();
});

// Delegacion de eventos para eliminar filas
tbody.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-eliminar")) {
        const fila = evento.target.closest("tr");
        fila.remove();
    }
});