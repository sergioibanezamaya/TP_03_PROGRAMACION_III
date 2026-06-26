const form = document.getElementById("form-personas");
const tbody = document.querySelector("#tabla-personas tbody");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const formData = new FormData(form);
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const edad = formData.get("edad");
    const altura = parseFloat(formData.get("altura"));
    const peso = parseFloat(formData.get("peso"));
    
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