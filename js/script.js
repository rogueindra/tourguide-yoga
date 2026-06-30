// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// TUTUP MENU SAAT DIKLIK
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// FILTER GALERI
const filterButtons = document.querySelectorAll(".filter button");
const galleryImages = document.querySelectorAll(".gallery img");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter button.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galleryImages.forEach(image => {
      const category = image.getAttribute("data-category");

      if (filter === "semua" || filter === category) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});

// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 900);
});

// LIGHTBOX GALERI
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// ANIMASI SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(item => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});