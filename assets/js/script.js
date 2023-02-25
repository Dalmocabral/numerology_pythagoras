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
      document.getElementById('resultado').textContent = `estrada da vida é ${resultadoFinal}.`;
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
      document.getElementById('resultado-dia').textContent = `Dia do Nascimento é ${numeroReduzidoDia}.`;
    } else {
      document.getElementById('resultado-dia').textContent = `Dia do Nascimento é ${numeroReduzidoDia} (números mestres não são reduzidos).`;
    }
  }
  
  document.getElementById('data-nascimento').addEventListener('input', calcularNumeroReduzidoDia);


const alphanumericTable = {
  "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6,
  "G": 7, "H": 8, "I": 9, "J": 1, "K": 2, "L": 3,
  "M": 4, "N": 5, "O": 6, "P": 7, "Q": 8, "R": 9,
  "S": 1, "T": 2, "U": 3, "V": 4, "W": 5, "X": 6,
  "Y": 7, "Z": 8
}


function calculateExpressionNumber() {
  let fullname = document.getElementById('nome').value.toUpperCase();
  let expressionNumber = 0;

  for (let i = 0; i < fullname.length; i++) {
    let char = fullname.charAt(i);
    if (alphanumericTable[char]) {
      expressionNumber += alphanumericTable[char];
    }
  }

  while (expressionNumber > 9) {
    if (expressionNumber === 11 || expressionNumber === 22 || expressionNumber === 33) {
      break;
    }
    expressionNumber = (expressionNumber + '').split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }

  document.getElementById('resultado-expressao').textContent = `O número de expressão é ${expressionNumber}.`;
}

document.getElementById('nome').addEventListener('input', () => {
  calculateExpressionNumber();
});




function calculateSoulMotivation() {
  let fullname = document.getElementById('nome').value.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let soulMotivation = 0;

  for (let i = 0; i < fullname.length; i++) {
    let char = fullname.charAt(i);
    if (vowels.includes(char) && alphanumericTable[char]) {
      soulMotivation += alphanumericTable[char];
    }
  }

  while (soulMotivation > 9) {
    if (soulMotivation === 11 || soulMotivation === 22 || soulMotivation === 33) {
      break;
    }
    soulMotivation = (soulMotivation + '').split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }

  document.getElementById('resultado-motivacao-alma').textContent = `O número da motivação da alma é ${soulMotivation}.`;
}

document.getElementById('nome').addEventListener('input', () => {
  calculateExpressionNumber();
  calculateSoulMotivation();
});


function desafio() {
  const nome = document.getElementById('nome').value;
  const dataNascimento = new Date(document.getElementById('data-nascimento').value);

  let dia = (dataNascimento.getDate() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  if (dia > 9) {
    dia = dia.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  }

  const mes = (dataNascimento.getMonth() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  const ano = dataNascimento.getFullYear().toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  let anoReduzido = ano.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));

  if (anoReduzido > 9) {
    anoReduzido = anoReduzido.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  }

  const resultado1 = Math.abs(dia - mes);
  const resultado2 = Math.abs(dia - anoReduzido);
  const desafio = Math.abs(resultado1 - resultado2);

  document.getElementById('resultadoDesafio').textContent = `Seu desafio é ${desafio}.`;
}

document.getElementById('data-nascimento').addEventListener('input', desafio);
