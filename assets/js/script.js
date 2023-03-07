

const alphanumericTable = {
  "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6,
  "G": 7, "H": 8, "I": 9, "J": 1, "K": 2, "L": 3,
  "M": 4, "N": 5, "O": 6, "P": 7, "Q": 8, "R": 9,
  "S": 1, "T": 2, "U": 3, "V": 4, "W": 5, "X": 6,
  "Y": 7, "Z": 8
}







function calcularEstradaDaVida() {
    // Obtemos os valores do campo "nome" e "data-nascimento"
    const nome = document.getElementById('nome').value;
    const dataNascimento = new Date(document.getElementById('data-nascimento').value);
  
    // Calculamos o valor reduzido do dia de nascimento
    let dia = (dataNascimento.getDate() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    if (dia > 9) {
      dia = dia.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    }
  
    // Calculamos o valor reduzido do mês de nascimento
    const mes = (dataNascimento.getMonth() + 1).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  
    // Calculamos o valor reduzido do ano de nascimento
    const ano = dataNascimento.getFullYear().toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    let anoReduzido = ano.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  
    // Reduzimos o ano novamente caso ele seja maior que 9
    if (anoReduzido > 9) {
      anoReduzido = anoReduzido.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    }
  
    // Calculamos a estrada da vida
    const estradaDaVida = (parseInt(dia) + parseInt(mes) + parseInt(anoReduzido));
  
    // Verificamos se a estrada da vida é um número mestre (11 ou 22)
    if (estradaDaVida === 11 || estradaDaVida === 22) {
      document.getElementById('resultado').innerHTML = `
      <section class="estradadavida">
      <strong>Estrada da vida é </strong> ${estradaDaVida}
      <br>
      <br>
      <strong>Aprendizado:</strong> ${numerology[estradaDaVida].Aprendizados}
      <br>
      <br>
      <strong>Caracteristicas:</strong> ${numerology[estradaDaVida].Caracteristicas}
      <br>
      <br>
      <strong>Manifestação Negativa:</strong> ${numerology[estradaDaVida].ManifestacaoNegativa}
      <br>
      <br>
      </section>`;
      document.getElementById('c5').innerHTML = `<span class="num c5"> ${estradaDaVida}</span>`;
    } else {
      // Reduzimos a estrada da vida caso ela seja maior que 9
      const resultadoFinal = estradaDaVida > 9 ? (estradaDaVida.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))) : estradaDaVida;
      document.getElementById('resultado').innerHTML = `
      <section class="estradadavida">
      <strong>Estrada da vida é </strong> ${resultadoFinal}
      <br>
      <br>
      <strong>Aprendizado:</strong> ${numerology[resultadoFinal].Aprendizados}
      <br>
      <br>
      <strong>Caracteristicas:</strong> ${numerology[resultadoFinal].Caracteristicas}
      <br>
      <br>
      <strong>Manifestação Negativa:</strong> ${numerology[resultadoFinal].ManifestacaoNegativa}
      <br>
      <br>
      </section>
      `;
      document.getElementById('c5').innerHTML = `<span class="num c5"> ${resultadoFinal}
      `;

    }
  }
  
  // Adicionamos um evento para calcular a estrada da vida sempre que o campo "data-nascimento" for alterado
  document.getElementById('data-nascimento').addEventListener('input', () => {
    calcularEstradaDaVida();
  });


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
  
    const resultado = document.getElementById('resultado-dia');
    const c7 = document.getElementById('c7');
  
    if (numeroReduzidoDia !== 11 && numeroReduzidoDia !== 22) {
      resultado.innerHTML = `
        <section class="diadonascimento">
          <strong>Dia do Nascimento é:</strong> ${numeroReduzidoDia}
          <br><br>
          ${numeronascimento[numeroReduzidoDia].numeros}
          <br><br>
          <strong>Lição Complementar:</strong> ${numeronascimento[numeroReduzidoDia].lição}
        </section>`;
      c7.innerHTML = `<span class="num c7">${numeroReduzidoDia}</span>`;
      
      if (dia === 16) {
        resultado.innerHTML = `
          <section class="diadonascimento">
            <strong>Dia do Nascimento é:</strong> ${numeroReduzidoDia}
            <br><br>
            ${numeronascimento[numeroReduzidoDia].numeros}
            <br><br>
            <strong>Lição Complementar:</strong> ${numeronascimento[numeroReduzidoDia].lição}
            <br><br>
            <strong>Dia ${dia}:</strong> ${numeronascimento[numeroReduzidoDia].dia16}
          </section>`;
      }
    } else {
      resultado.innerHTML = `
        <section class="diadonascimento">
          <strong>Dia do Nascimento é:</strong> ${numeroReduzidoDia}
          <br><br>
          ${numeronascimento[numeroReduzidoDia].numeros}
          <br><br>
          <strong>Lição Complementar:</strong> ${numeronascimento[numeroReduzidoDia].lição}
        </section>`;
      c7.innerHTML = `<span class="num c7">${numeroReduzidoDia}</span>`;
      
      if (dia === 16) {
        resultado.innerHTML = `
          <section class="diadonascimento">
            <strong>Dia do Nascimento é:</strong> ${numeroReduzidoDia}
            <br><br>
            ${numeronascimento[numeroReduzidoDia].numeros}
            <br><br>
            <strong>Lição Complementar:</strong> ${numeronascimento[numeroReduzidoDia].lição}
            <br><br>
            <strong>Dia ${dia}:</strong> ${numeronascimento[numeroReduzidoDia].dia16}
          </section>`;
      }
    }
  }
  
  document.getElementById('data-nascimento').addEventListener('input', calcularNumeroReduzidoDia);
  
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

  document.getElementById('resultado-expressao').innerHTML = `O número de expressão é ${expressionNumber}.`;
  document.getElementById('c8').innerHTML = `<span class="num c8">${expressionNumber}</span>`;
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

  document.getElementById('resultado-motivacao-alma').innerHTML = `O número da motivação da alma é ${soulMotivation}.`;
  document.getElementById('c9').innerHTML = `<span class="num c9"> ${soulMotivation}</span>`;
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

  document.getElementById('resultadoDesafio').innerHTML = `Seu desafio é ${desafio}.`;
  document.getElementById('c11').innerHTML = `<span class="num c11"> ${desafio}</span>`;
  
}

document.getElementById('data-nascimento').addEventListener('input', desafio);


function calcularValorReduzido() {
  let fullname = document.getElementById('nome').value.toUpperCase();
  let parts = fullname.split(' ');
  let valoresReduzidos = [];

  for (let i = 0; i < parts.length; i++) {
    let valorReduzido = 0;
    for (let j = 0; j < parts[i].length; j++) {
      let char = parts[i].charAt(j);
      if (alphanumericTable[char]) {
        valorReduzido += alphanumericTable[char];
      }
    }

    while (valorReduzido > 9) {
      valorReduzido = (valorReduzido + '').split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    valoresReduzidos.push(valorReduzido);
  }

  let table = '<table><tr><th>Nome</th><th>Resultado</th></tr>';
  for (let i = 0; i < parts.length; i++) {
    table += '<tr><td>' + parts[i] + '</td><td>' + valoresReduzidos[i] + '</td></tr>';
  }
  table += '</table>';

  document.getElementById('resultado-nome-reduzido').innerHTML = table;
}

document.getElementById('nome').addEventListener('input', calcularValorReduzido);


