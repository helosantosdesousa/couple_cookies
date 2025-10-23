async function carregarContagemCookies() {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqs2bcl2tWQiXphylTWx8IUo5y5adI4ifVgF6cRQapxIQ0wK0QkM5DzoIHRnV0NyrcVEu16m7mLbQj/pub?output=csv";

    try {
        const response = await fetch(csvUrl);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }
        
        const text = await response.text();

        const linhas = text.trim().split("\n")
            .slice(1) 
            .filter(line => line.trim().length > 0 && line.includes(','));

        const hoje = new Date();
        const mesAtual = hoje.getMonth();
        const anoAtual = hoje.getFullYear();

        let totalMes = 0;
        let totalHistorico = 0;

        linhas.forEach(linha => {
            const [dataStr, qtdStrRaw] = linha.split(",").map(item => item.trim());
            
            if (!dataStr || !qtdStrRaw || qtdStrRaw === '') return;

            // 1. CORREÇÃO PRINCIPAL: Remove o ponto (separador de milhar) para que a conversão funcione.
            // Ex: "10.712" se torna "10712"
            const cleanQtdStr = qtdStrRaw.replace(/\./g, '');
            const qtd = parseInt(cleanQtdStr, 10);
            
            if (isNaN(qtd)) return;

            // Prepara a data (formato YYYY-MM-DD)
            const partes = dataStr.split("-");
            const dataVenda = new Date(parseInt(partes[0]), parseInt(partes[1]) - 1, parseInt(partes[2]));
            
            if (isNaN(dataVenda.getTime())) return; 

            totalHistorico += qtd;
            
            if (dataVenda.getFullYear() === anoAtual && dataVenda.getMonth() === mesAtual) {
                totalMes += qtd;
            }
        });

        document.getElementById("cookiesMes").textContent = totalMes.toLocaleString('pt-BR');
        document.getElementById("cookiesHistorico").textContent = totalHistorico.toLocaleString('pt-BR');

    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        document.getElementById("cookiesMes").textContent = 'Erro';
        document.getElementById("cookiesHistorico").textContent = 'Erro';
    }
}

carregarContagemCookies();