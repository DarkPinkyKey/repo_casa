//Color rojo
$(document).ready(function() {
    $('#toggleButton').click(function() {
      $('#myParagraph').toggleClass('red-text');
    });
  });

//Color azul
  document.getElementById('toggleButton1').addEventListener('click', function() {
    var paragraph = document.getElementById('myParagraph1');
    paragraph.classList.toggle('blue-text');
  });
  