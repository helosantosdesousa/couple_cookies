async function carregarContagemCookies() {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqs2bcl2tWQiXphylTWx8IUo5y5adI4ifVgF6cRQapxIQ0wK0QkM5DzoIHRnV0NyrcVEu16m7mLbQj/pub?output=csv";

  try {
    const response = await fetch(csvUrl);
    const text = await response.text();

    const linhas = text.trim().split("\n").slice(1);

    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    let totalMes = 0;
    let totalHistorico = 0;

    linhas.forEach(linha => {
      const [dataStr, qtdStr] = linha.split(",").map(item => item.trim());
      if (!dataStr || !qtdStr) return;

      const partes = dataStr.split("-");
      const dataVenda = new Date(parseInt(partes[0]), parseInt(partes[1]) - 1, parseInt(partes[2]));
      const qtd = parseInt(qtdStr, 10);
      if (isNaN(qtd)) return;

      totalHistorico += qtd;
      if (dataVenda.getFullYear() === anoAtual && dataVenda.getMonth() === mesAtual) {
        totalMes += qtd;
      }
    });

    document.getElementById("cookiesMes").textContent = totalMes;
    document.getElementById("cookiesHistorico").textContent = totalHistorico;

  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

carregarContagemCookies();
