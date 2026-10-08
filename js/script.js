'use strict';
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `${visible} ${visible === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('gustavobolsoni.s@gmail.com');
    status.textContent = 'E-mail copiado!';
  } catch {
    status.textContent = 'Selecione o endereço acima para copiar.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
