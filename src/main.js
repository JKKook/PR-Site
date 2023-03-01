'use strict';

// error handling of indicate samsite
document.cookie = 'safeCookie1=foo; SameSite=Lax';
document.cookie = 'safeCookie2=foo';
document.cookie = 'crossCookie=bar; SameSite=None; Secure';

// handleToggle
const toggleBtn = document.querySelector('.navbar__toggle');
const navTags = document.querySelector('.navbar__menu__tags');

toggleBtn.addEventListener('click', () => {
  navTags.classList.toggle('active');
});

// ** scroll event
// if pageOffsetY is bigger than 200px, fix navBar and show ScrollBtn
const arrowBtn = document.querySelector('.arrow__btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 500) {
    navTags.classList.add('navbar__fix');
    arrowBtn.style.display = 'block';
  } else if (window.pageYOffset < 400) {
    navTags.classList.remove('navbar__fix');
    arrowBtn.style.display = 'none';
  }
});

// scrollintoView
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
};

arrowBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

const sectionIds = ['#home', '#about', '#stacks', '#works', '#contact'];

const sections = sectionIds.map((id) => document.querySelector(id));
const navSectionTags = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`),
);

let selectNavTagIndex = 0;
let selectNavTags = navSectionTags[0];
const selectNavTag = (selectedTag) => {
  selectNavTags.classList.remove('active');
  selectNavTags = selectedTag;
  selectNavTags.classList.add('active');
};

// handle scrolling
const navbarMenu = document.querySelector('.navbar__menu__tags');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null || undefined) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});
