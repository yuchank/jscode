$(function () {

  // const
  const pizza = true;
  
  // let
  {
    let topic = 'React';
  }

  var div,
      container = document.getElementById('container');

  for (let i = 0; i < 5; i++) {     // var i is a global variable.
    div = document.createElement('div');
    div.onclick = function () {
      alert('This is box #' + i);
    }
    container.appendChild(div);
  }

});