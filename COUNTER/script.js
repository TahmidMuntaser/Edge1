document.getElementById('button').addEventListener('click', function() {
    var display = document.getElementById('display');
    var count = parseInt(display.textContent, 10);
    display.textContent = count + 1;
  });

