function mostrarSeccion(id) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll(".section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Muestra la sección seleccionada
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.style.display = "block";
  }
}

// Opcional: Mostrar por defecto la sección "inicio" al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("inicio");
});
