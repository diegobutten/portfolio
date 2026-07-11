const navbar = document.querySelector("#navbar");
const navbarParent = navbar.parentElement;

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight) {
    navbarParent.classList.remove("bg-opacity-75");
    navbarParent.classList.add("bg-opacity-90");
  } else {
    navbarParent.classList.remove("bg-opacity-90");
    navbarParent.classList.add("bg-opacity-75");
  }
});