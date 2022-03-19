window.onload = function() {
  function corBackground (color) {
    let conteudo = document.querySelector('.conteudo');
    conteudo.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  function corDaFont (color) {
    let p = document.querySelectorAll('.paragrafo');
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.color = color;
    }
    localStorage.setItem('fontColor', color);
  }

  // evento addEventListener

  let backgroundButtons = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < backgroundButtons.length; i += 1) {
    backgroundButtons[i].addEventListener('click', function(event) {
      corBackground(event.target.innerHTML);
    })
  }

  let fontButtons = document.querySelectorAll('#font-color > button');
  for (let i = 0; i < fontButtons.length; i += 1) {
    fontButtons[i].addEventListener('click', function(event) {
      corDaFont(event.target.innerHTML);
    })
  }

  // executa a função

  function executa() {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) corBackground(backgroundColor);

    let fontColor = localStorage.getItem('fontSize');
    if (fontColor) corDaFont(fontColor);
  }
  executa()

}