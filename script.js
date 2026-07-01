const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}
function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thank you. Your request has been captured. Connect this form later to email or CRM.';
  event.target.reset();
}
