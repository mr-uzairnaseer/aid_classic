// Modal & Toast Logic for Aid_Classic
const modal = document.getElementById("register-modal");
const registerBtns = document.querySelectorAll(".btn-register");
const closeBtn = document.querySelector(".modal__close");
const registerForm = document.getElementById("register-form");
const contactForm = document.querySelector(".contact__form form");
const toast = document.getElementById("success-toast");
const toastMsg = document.getElementById("toast-msg");

function showToast(message) {
  if (!toast) return;
  toastMsg.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

registerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("show");
    showToast("Registration Successful! Welcome to the Aid family.");
    registerForm.reset();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message Sent! We'll contact you shortly.");
    contactForm.reset();
  });
}
