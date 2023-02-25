function calcularEstradaDaVida() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = new Date(document.getElementById('data-nascimento').value);
  
    let dia = (dataNascimento.getDate() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    console.log(dia);
    if (dia > 9) {
      dia = dia.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
      console.log(dia);
    }
  
    const mes = (dataNascimento.getMonth() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    console.log(mes);
    const ano = dataNascimento.getFullYear().toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    console.log(ano);
    let anoReduzido = ano.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    console.log(anoReduzido);
  
    if (anoReduzido > 9) {
      anoReduzido = anoReduzido.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
      console.log(anoReduzido);
    }
  
    const estradaDaVida = (parseInt(dia) + parseInt(mes) + parseInt(anoReduzido));
    console.log(estradaDaVida);
  
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
  