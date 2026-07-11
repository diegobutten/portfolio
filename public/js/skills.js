document.querySelectorAll(".language").forEach((language) => {
  language.addEventListener("mouseenter", () => {
    language.classList.add("z-10");
  });

  language.addEventListener("mouseleave", () => {
    language.classList.remove("z-10");
  });
});
