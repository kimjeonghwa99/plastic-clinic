// Mobile menu toggle
const btn = document.querySelector("[data-menu-btn]");
const mnav = document.querySelector("[data-mnav]");
const links = document.querySelectorAll("[data-mnav-link]");

if (btn && mnav) {
  btn.addEventListener("click", () => {
    const isOpen = mnav.style.display === "block";
    mnav.style.display = isOpen ? "none" : "block";
  });

  links.forEach((a) => {
    a.addEventListener("click", () => {
      mnav.style.display = "none";
    });
  });
}

// Demo form submit
const form = document.getElementById("consultForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`상담 요청(데모)\n이름: ${data.name}\n연락처: ${data.phone}\n희망 진료: ${data.service}\n희망 시간: ${data.time}`);
    form.reset();
  });
}
