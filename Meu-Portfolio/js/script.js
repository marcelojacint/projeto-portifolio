// Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Abrir links dos projetos
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    if (link) {
      window.open(link, '_blank'); // Abre o link em uma nova aba
    }
  });
});

// Exibir modal para habilidades
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    const modal = document.getElementById('skill-modal');
    const title = skill.textContent.trim();
    const description = skill.getAttribute('data-summary');

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    modal.style.display = 'flex';
  });
});

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animação de entrada para os cards de projetos
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Exibir e ocultar o resumo das habilidades
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    // Verificar se o modal já existe
    let existingModal = document.querySelector('.skill-modal');
    
    if (existingModal) {
      // Se já existe, inicia a animação de saída e remove o modal após a animação
      existingModal.classList.add('fade-out');
      setTimeout(() => {
        existingModal.remove();  // Remove o modal após a animação de saída
      }, 300);  // Espera o tempo da animação de saída
    } else {
      // Caso não exista, cria um novo modal
      const modal = document.createElement('div');
      modal.classList.add('skill-modal');

      // Conteúdo do modal
      modal.innerHTML = `
        <div class="modal-content">
          <h2>${skill.textContent.trim()}</h2>
          <p>${skill.getAttribute('data-summary')}</p>
        </div>
      `;

      // Adicionar evento de clique para fechar o modal
      modal.addEventListener('click', (e) => {
        // Verificar se o clique foi fora do conteúdo
        if (e.target === modal) {
          modal.classList.add('fade-out');
          setTimeout(() => {
            modal.remove();  // Fecha o modal após animação
          }, 300);
        }
      });

      // Adicionar o modal ao corpo
      document.body.appendChild(modal);
      // Iniciar animação de entrada
      setTimeout(() => {
        modal.classList.add('fade-in');
      }, 10);  // Pequeno delay para garantir que o modal seja visível
    }
  });
});






// Fechar modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('skill-modal').style.display = 'none';
});
