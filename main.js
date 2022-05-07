window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showHomeButton();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  // linha alvo //
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a seção passou da linha //

  // topo da seção //
  const sectionTop = section.offsetTop;

  // altura da seção //
  const sectionHeight = section.offsetHeight;

  // o topo da seção chegou ou ultrapassou a linha alvo //
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  // verificar se a base está abaixo da linha alvo //

  const sectionEndsAt = sectionTop + sectionHeight;

  // final da seção passou da linha //
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  // limites da seção //
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}
function showHomeButton() {
  if (scrollY > 400) {
    homeButton.classList.add("show");
  } else {
    homeButton.classList.remove("show");
  }
}
function openMenu() {
  document.body.classList.add("menu-expanded");
}
function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`#home,
#home img,
#home .cxdados,
#services,
#services header,
#services .card,
#about,
#about header,
#about img,
#contact,
#contact header,
#contact .content
#contact img,
#footer`);
