
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
