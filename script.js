const sections = [...document.querySelectorAll('.section')];
const links = [...document.querySelectorAll('[data-section]')];

function showSection(id, updateHistory = true) {
  const target = document.getElementById(id) || document.getElementById('inicio');
  sections.forEach((section) => section.classList.toggle('active', section === target));
  links.forEach((link) => link.classList.toggle('active', link.dataset.section === target.id));
  if (updateHistory) history.replaceState(null, '', `#${target.id}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

links.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  showSection(link.dataset.section);
}));

window.addEventListener('hashchange', () => showSection(location.hash.slice(1), false));
showSection(location.hash.slice(1) || 'inicio', false);
