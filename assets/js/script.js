function calcularEstradaDaVida() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = new Date(document.getElementById('data-nascimento').value);
  
    let dia = (dataNascimento.getDate() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    //console.log(dia);
    if (dia > 9) {
      dia = dia.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
      //console.log(dia);
    }
  
    const mes = (dataNascimento.getMonth() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    //console.log(mes);
    const ano = dataNascimento.getFullYear().toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    //console.log(ano);
    let anoReduzido = ano.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    //console.log(anoReduzido);
  
    if (anoReduzido > 9) {
      anoReduzido = anoReduzido.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
      //console.log(anoReduzido);
    }
  
    const estradaDaVida = (parseInt(dia) + parseInt(mes) + parseInt(anoReduzido));
    //console.log(estradaDaVida);
  
    if (estradaDaVida === 11 || estradaDaVida === 22) {
      document.getElementById('resultado').textContent = `${nome}, sua estrada da vida é ${estradaDaVida}.`;
    } else {
      const resultadoFinal = estradaDaVida > 9 ? (estradaDaVida.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))) : estradaDaVida;
      document.getElementById('resultado').textContent = `${nome}, sua estrada da vida é ${resultadoFinal}.`;
    }
  }
  
  document.getElementById('data-nascimento').addEventListener('input', () => {
    calcularEstradaDaVida();
  });
  

  // FUNÇÃO PARA CALCULAR O DIA DE NASCIMENTO
  function calcularNumeroReduzidoDia() {
    const diaString = document.getElementById('data-nascimento').value;
    const dia = parseInt(diaString.split('-')[2]);
  
    let numeroReduzidoDia = dia;
  
    while (numeroReduzidoDia > 9) {
      numeroReduzidoDia = numeroReduzidoDia
        .toString()
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b));
    }
  
    if (numeroReduzidoDia !== 11 && numeroReduzidoDia !== 22) {
      document.getElementById('resultado-dia').textContent = `O número reduzido do dia é ${numeroReduzidoDia}.`;
    } else {
      document.getElementById('resultado-dia').textContent = `O número reduzido do dia é ${numeroReduzidoDia} (números mestres não são reduzidos).`;
    }
  }
  
  document.getElementById('data-nascimento').addEventListener('input', calcularNumeroReduzidoDia);
  