function klik() {
  alert("Mantap Dino 🔥");
}

// typing effect
const text = "Halo, aku Dino 👋";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// dark mode
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};

// scroll animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// skill bar animasi
const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  fills.forEach(f => {
    if (f.getBoundingClientRect().top < window.innerHeight) {
      f.style.width = f.dataset.width;
    }
  });
});

// modal image
function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// form
function kirim(e) {
  e.preventDefault();
  alert("Pesan terkirim 🚀 (dummy)");
}