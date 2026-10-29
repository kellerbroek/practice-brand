
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
