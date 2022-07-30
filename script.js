const navCheck = document.querySelector(`.navbar__checkbox`);

const navBar = document.querySelector(`.navbar`);
const navBarCheckbox = document.querySelector(`.navbar__checkbox `);
const navbarToggle = document.querySelector(`.navbar__button`);

// REVEAL SECTION
const section = document.querySelectorAll(`.section`);
const sectionLeft = document.querySelectorAll(`.section--left`);
const sectionRight = document.querySelectorAll(`.section--right`);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

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
