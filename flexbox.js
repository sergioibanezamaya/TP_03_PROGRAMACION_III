const datos = [
    { id: 1, nombre: "Logica de Programacion", tipo: "programacion" },
    { id: 2, nombre: "Bases de Datos", tipo: "programacion" },
    { id: 3, nombre: "Diseno Grafico", tipo: "diseno" },
    { id: 4, nombre: "Programacion Orientada a Objetos", tipo: "programacion" },
    { id: 5, nombre: "Edicion de Video", tipo: "diseno" },
    { id: 6, nombre: "Sistemas Operativos", tipo: "sistemas" }
];

const contenedor = document.getElementById("contenedor-tarjetas");
const btnFiltrar = document.getElementById("btn-filtrar");
const btnReset = document.getElementById("btn-reset");

function renderizarTarjetas(arreglo) {
    contenedor.innerHTML = "";
    
    arreglo.forEach(item => {
        const div = document.createElement("div");
        div.className = "tarjeta";
        div.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Categoria: ${item.tipo}</p>
        `;
        contenedor.appendChild(div);
    });
}

btnFiltrar.addEventListener("click", () => {
    const filtrados = datos.filter(item => item.tipo === "programacion");
    renderizarTarjetas(filtrados);
});

btnReset.addEventListener("click", () => {
    renderizarTarjetas(datos);
});

renderizarTarjetas(datos);