 export function getTodayDate() {
    const today = new Date();

    // O dia deve ter 2 dígitos (padStart preenche com '0' à esquerda se necessário)
    const dd = String(today.getDate()).padStart(2, '0');

    // O mês começa em 0 no JS, por isso somamos +1
    const mm = String(today.getMonth() + 1).padStart(2, '0');

    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }