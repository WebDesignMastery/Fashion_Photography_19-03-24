const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".section__container h3", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section__container h1", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});
ScrollReveal().reveal(".section__container h2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".section__container button", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".nav__links li", {
  ...scrollRevealOption,
  origin: "top",
  interval: 300,
  delay: 2000,
});

ScrollReveal().reveal(".socials a", {
  duration: 1000,
  interval: 500,
  delay: 4000,
});
