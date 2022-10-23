const navCheck = document.querySelector(`.navbar__checkbox`);

const navBar = document.querySelector(`.navbar`);
const navBarCheckbox = document.querySelector(`.navbar__checkbox `);
const navbarToggle = document.querySelector(`.navbar__button`);
const allTour = document.querySelectorAll(".all--tours--link");
const showTour = document.querySelector(".all--tours--link--show");
const hideTour = document.querySelector(".all--tours--link--hide");
const popularTour = document.querySelectorAll(
  ".popular--tour--section--showHide "
);

// REVEAL SECTIONS
const section = document.querySelectorAll(`.section`);
const sectionLeft = document.querySelectorAll(`.section--left`);
const sectionRight = document.querySelectorAll(`.section--right`);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove(`section--hidden`);
  entry.target.classList.remove(`section--left`);
  entry.target.classList.remove(`section--right`);

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

section.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add(`section--hidden`);
});

sectionRight.forEach((sec) => sectionObserver.observe(sec));
sectionLeft.forEach((sec) => sectionObserver.observe(sec));

// smooth scroll
const navLinks = document.querySelectorAll(`.each--nav__item`);

navLinks.forEach((link) =>
  link.addEventListener(`click`, function (e) {
    e.preventDefault();

    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(`${id}`).scrollIntoView({
      behavior: "smooth",
    });
  })
);

// Reveal all tours
showTour.addEventListener("click", function (event) {
  event.preventDefault();
  popularTour.forEach((each) => {
    each.classList.remove("none");
  });
  showTour.classList.add("none");
  hideTour.classList.remove("none");
});
hideTour.addEventListener("click", function (event) {
  event.preventDefault();
  popularTour.forEach((each) => {
    each.classList.add("none");
  });
  showTour.classList.remove("none");
  hideTour.classList.add("none");
});
