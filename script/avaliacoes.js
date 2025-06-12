const avaliacoes = [
  {
    texto: "Muito delícia, comprei de indicação de uma amiga e amei.",
    nome: "Ifood",
    estrelas: 5
  },
  {
    texto: "O melhor cookie que já comi em minha vida! Quentinho, bem recheado, gostoso, pontual e tudo de bom. Amo",
    nome: "Ifood",
    estrelas: 5
  },
  {
    texto: "Cookie delicioso! Pedimos toda semana o de chocolate e o de bolo de cenoura!",
    nome: "Ifood",
    estrelas: 5
  },
  {
    texto: "Cookie delicioso! Pedimos toda semana o de chocolate e o de bolo de cenoura!",
    nome: "Ifood",
    estrelas: 5
  },
  {
    texto: "Reunião de família, família toda reunida pedindo cookies pós pizza ❤️❤️",
    nome: "Instagram",
    estrelas: 5
  }
];

const carouselInner = document.getElementById('carouselInner');

avaliacoes.forEach((avaliacao, index) => {
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
});
