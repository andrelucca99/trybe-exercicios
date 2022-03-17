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

  // Exercício 1

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

  //Exercício 2

  function diasDeFeriado(button) {
      let btn = document.querySelector('.buttons-container');
      let newBtn = document.createElement('button');
      let btnId = 'btn-holiday';

      newBtn.innerHTML = button;
      newBtn.id = btnId;
      btn.appendChild(newBtn);
  }

  diasDeFeriado('Feriados');

  //Exercício 3

  function mudaHoliday() {
      let btnHoliday = document.getElementById('btn-holiday');
      let diasHoliday = document.querySelectorAll('.holiday');
      let background = 'rgb(238,238,238)';
      let newColor = 'white';

      btnHoliday.addEventListener('click', function() {

        for (let i = 0; i < diasHoliday.length; i += 1) {
            if (diasHoliday[i].style.backgroundColor === newColor) {
                diasHoliday[i].style.backgroundColor = background;
            } else {
                diasHoliday[i].style.backgroundColor = newColor;
            }
        }
      })
    };

    mudaHoliday();

  //Exercício 4 
  
  function buttonSexta(button) {
      let btn = document.querySelector('.buttons-container');
      let newBtn = document.createElement('button');
      let btnId = 'btn-friday';

      newBtn.innerHTML = button;
      newBtn.id = btnId;
      btn.appendChild(newBtn);    
    };

    buttonSexta('Sexta-feira');

    //Exercício 5
    
    function mudaSexta() {
        let btnSexta = document.getElementById('btn-friday');
        let diasSexta = document.querySelectorAll('.friday');
        let background = 'rgb(238,238,238)';
        let newColor = 'white';

        btnSexta.addEventListener('click', function () {
            for (let i = 0; i < diasSexta.length; i += 1) {
                if (diasSexta[i].style.backgroundColor === newColor) {
                    diasSexta[i].style.backgroundColor = background;
                } else {
                    diasSexta[i].style.backgroundColor = newColor;
                }
            }
        })
    };
    
    mudaSexta();

    //Exercício 6 

    function zoomMouse() {
        let dias = document.getElementById('days');

        dias.addEventListener('mouseover', function (zoom) {
            zoom.target.style.fontSize = '30';
            zoom.target.style.fontWeight = '600';
        })
    };

    function diminiZoom() {
        let dias = document.getElementById('days');

        dias.addEventListener('mouseout', function(diminui) {
            diminui.target.style.fontSize = '20';
            diminui.target.style.fontWeight = '200';
        })
    };

    zoomMouse();
    diminiZoom();

    //Exercício 7

    function ListaDeTarefas(tarefa) {
        let newTarefa = document.querySelector('.my-tasks');
        let nomeTarefa = document.createElement('span');

        nomeTarefa.innerHTML = tarefa;
        newTarefa.append(nomeTarefa);
    
    };

    ListaDeTarefas('Projeto:');
