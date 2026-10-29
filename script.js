
/* BITE ME — INTERACTIVE BRAND IDENTITY */

document.querySelectorAll(".color-card").forEach(card => {
  card.addEventListener("click", async () => {
    const hex = card.dataset.hex;
    const message = document.getElementById("copy-message");

    try {
      await navigator.clipboard.writeText(hex);
      message.textContent = "♡ COPIED " + hex + " TO CLIPBOARD!";
    } catch (error) {
      message.textContent =
        "COPY THIS CODE: " + hex;
    }
  });
});

/* ===========================
   TYPOGRAPHY FONT TESTER
   =========================== */

const fontInput = document.getElementById("font-input");

if (fontInput) {
  const display = document.getElementById("preview-display");
  const digital = document.getElementById("preview-digital");
  const body = document.getElementById("preview-body");

  fontInput.addEventListener("input", () => {
    const text = fontInput.value;

    display.textContent = text;
    digital.textContent = text;
    body.textContent = text;
  });
}

/* ===========================
   VISUALS — IMAGE VIEWER
   =========================== */

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const closeModal = document.getElementById("close-modal");

if (imageModal && modalImage && closeModal) {
  let previousFocus = null;

  document.querySelectorAll(".visual-image-button")
    .forEach(button => {

      button.addEventListener("click", () => {
        previousFocus = document.activeElement;

        modalImage.src = button.dataset.image;
        modalCaption.textContent =
          button.dataset.caption;

        imageModal.hidden = false;
        document.body.style.overflow = "hidden";
        closeModal.focus();
      });
    });

  function hideImageModal() {
    imageModal.hidden = true;
    modalImage.removeAttribute("src");
    document.body.style.overflow = "";
    if (previousFocus) previousFocus.focus();
  }

  closeModal.addEventListener("click", hideImageModal);

  imageModal.addEventListener("click", event => {
    if (event.target === imageModal) {
      hideImageModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (imageModal.hidden) return;

    if (event.key === "Escape") {
      hideImageModal();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      closeModal.focus();
    }
  });
}
