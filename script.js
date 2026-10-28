const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    document.querySelector("#form-message").textContent =
      `Thank you, ${name}! This demonstration form is working, but it does not send a real email.`;
    form.reset();
  });
}
