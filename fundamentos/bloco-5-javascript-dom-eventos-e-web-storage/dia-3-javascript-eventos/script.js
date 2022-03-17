function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function mesDeDezembro() {
    let dias = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let dia = dezDaysList[i];
        let diaItem = document.createElement('li');

        if (dia === 24 || dia === 25 || dia === 31) {
            diaItem.className = 'day holiday';
            diaItem.innerHTML = dia;
            dias.appendChild(diaItem);
        } else if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
            diaItem.className = 'day friday';
            diaItem.innerHTML = dia;
            dias.appendChild(diaItem);
        } else {
            diaItem.className = 'day';
            diaItem.innerHTML = dia;
            dias.appendChild(diaItem);    
        }
    } 
  }

  mesDeDezembro();

  function diasDeFeriado(button) {
      let btn = document.querySelector('.buttons-container');
      let newBtn = document.createElement('button');
      let btnId = 'btn-holiday';

      newBtn.innerHTML = button;
      newBtn.id = btnId;
      btn.appendChild(newBtn);
  }

  diasDeFeriado('Feriados');