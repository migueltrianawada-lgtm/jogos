const roleDescriptions = {
  solicitante: "Consulta disponibilidad y organiza tus reservas de espacios.",
  responsable: "Revisa solicitudes especiales, asignaciones docentes y movimiento de materiales.",
  administrador: "Administra espacios, docentes, materiales, usuarios, bloques y períodos de mantenimiento."
};

const roleButtons = document.querySelectorAll("[data-role]");
const roleDescription = document.querySelector("#role-description");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roleButtons.forEach((roleButton) => {
      const isSelected = roleButton === button;
      roleButton.classList.toggle("selected", isSelected);
      roleButton.setAttribute("aria-pressed", String(isSelected));
    });

    roleDescription.textContent = roleDescriptions[button.dataset.role];
  });
});
