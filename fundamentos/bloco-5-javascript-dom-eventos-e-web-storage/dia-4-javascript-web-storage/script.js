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

  function tamanhoFont (size) {
    let p = document.querySelectorAll('.paragrafo');
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.fontSize = size; 
    }
    localStorage.setItem('fontSize', size);
  }

  function lineHeights (height) {
    let p = document.querySelectorAll('.paragrafo');
    for (let i = 0; p.length; i += 1) {
      p[i].style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  }

  function addFontFamily (family) {
    let p = document.querySelectorAll('.paragrafo');
    for (let i = 0; i < p.length; i += 1) {
      p[i].style.fontFamily = family;
    }
    localStorage.setItem('font-family', family);
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

  let sizeButtons = document.querySelectorAll('#font-size > button');
  for (let i = 0; i < sizeButtons.length; i += 1) {
    sizeButtons[i].addEventListener('click', function(event) {
      tamanhoFont(event.target.innerHTML);
    })
  }

  let lineButtons = document.querySelectorAll('#line-height > button');
  for (let i = 0; i < lineButtons.length; i += 1) {
    lineButtons[i].addEventListener('click', function(event) {
      lineHeights(event.target.innerHTML);
    })
  }

  let familyButtons = document.querySelectorAll('#font-family > button');
    for (let i = 0; i < familyButtons.length; i += 1) {
      familyButtons[i].addEventListener('click', function(event) {
        addFontFamily(event.target.innerHTML);
      })
    }

  // executa a função

  function executa() {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) corBackground(backgroundColor);

    let fontColor = localStorage.getItem('fontSize');
    if (fontColor) corDaFont(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) tamanhoFont(fontSize);

    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) lineHeights(lineHeight);

    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) addFontFamily(fontFamily);
  }
  executa()

}