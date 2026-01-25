document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("globalModal");
  const modalBody = modal.querySelector(".modal-body");
  const closeBtn = modal.querySelector(".modal-close");

  /* ========= OPEN MODAL FROM TEMPLATE ========= */
  document.querySelectorAll("[data-modal]").forEach(trigger => {
    trigger.addEventListener("click", () => {

      const templateId = trigger.dataset.modal;
      const template = document.getElementById(templateId);
      if (!template) return;

      modalBody.innerHTML = "";
      modalBody.appendChild(template.content.cloneNode(true));
      modal.classList.add("open");

      // ===== Activate first logo by default =====
      const logoItems = modal.querySelectorAll(".logo-item");
      const logoDetails = modal.querySelectorAll(".logo-detail");

      if (logoItems.length && logoDetails.length) {
        logoItems.forEach(l => l.classList.remove("active"));
        logoDetails.forEach(d => d.classList.remove("active"));

        logoItems[0].classList.add("active");
        logoDetails[0].classList.add("active");
      }
    });
  });

  /* ========= CLOSE MODAL ========= */
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    modalBody.innerHTML = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("open");
      modalBody.innerHTML = "";
    }
  });

  /* ========= LOGO INTERACTION INSIDE MODAL ========= */
  modal.addEventListener("click", e => {
    const logoItem = e.target.closest(".logo-item");
    if (!logoItem) return;

    const logoItems = modal.querySelectorAll(".logo-item");
    const logoDetails = modal.querySelectorAll(".logo-detail");
    const targetId = logoItem.dataset.logo;

    // reset all
    logoItems.forEach(l => l.classList.remove("active"));
    logoDetails.forEach(d => d.classList.remove("active"));

    // activate selected
    logoItem.classList.add("active");
    const targetDetail = modal.querySelector(`#${targetId}`);
    if (targetDetail) {
      targetDetail.classList.add("active");
    }
  });

});
