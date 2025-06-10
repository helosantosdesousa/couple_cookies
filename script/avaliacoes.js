const avaliacoes = [
  {
    texto: "Produto excelente, superou minhas expectativas! Recomendo.",
    nome: "João Silva",
    estrelas: 5
  },
  {
    texto: "Entrega rápida e qualidade ótima, comprarei novamente.",
    nome: "Maria Oliveira",
    estrelas: 4
  },
  {
    texto: "Gostei bastante, atendimento também foi muito bom.",
    nome: "Carlos Pereira",
    estrelas: 5
  }
];

const carouselInner = document.getElementById('carouselInner');
const carouselIndicators = document.getElementById('carouselIndicators');

avaliacoes.forEach((avaliacao, index) => {
  // Cria o item do carrossel
  const divItem = document.createElement('div');
  divItem.classList.add('carousel-item');
  if(index === 0) divItem.classList.add('active');

  divItem.innerHTML = `
    <div class="card text-center mx-auto" style="max-width: 600px;">
      <div class="card-body">
        <p class="card-text fst-italic">"${avaliacao.texto}"</p>
        <h5 class="card-title mt-3">${avaliacao.nome}</h5>
        <small class="text-muted">${'⭐'.repeat(avaliacao.estrelas)}</small>
      </div>
    </div>
  `;

  carouselInner.appendChild(divItem);

  const buttonIndicator = document.createElement('button');
  buttonIndicator.type = "button";
  buttonIndicator.setAttribute('data-bs-target', '#avaliacoesCarousel');
  buttonIndicator.setAttribute('data-bs-slide-to', index);
  buttonIndicator.setAttribute('aria-label', `Avaliação ${index + 1}`);
  if(index === 0) {
    buttonIndicator.classList.add('active');
    buttonIndicator.setAttribute('aria-current', 'true');
  }
  carouselIndicators.appendChild(buttonIndicator);
});
