const email = document.querySelector(".email-svg");

email.addEventListener("click", (e) => {
  const emailAddress = email.dataset.clipboardText;
  navigator.clipboard.writeText(emailAddress);
  e.target.focus();
});

const popover = new bootstrap.Popover(document.querySelector(".email-popover"), {
  trigger: "focus",
});
