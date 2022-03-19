window.onload = function() {
  function corBackground (color) {
    let conteudo = document.querySelector('.conteudo');
    conteudo.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  let backgroundButtons = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < backgroundButtons.length; i += 1) {
    backgroundButtons[i].addEventListener('click', function(event) {
      corBackground(event.target.innerHTML);
    })
  }

  function executa() {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) corBackground('backgroundColor');
  }
  executa()

}