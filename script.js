var Pomodoro = (function(){

  // Function to get everything started
  function init(){
    events();
    console.log('Started!');
    setTimeout(function(){
      drawPath();
    }, 3000);
  }

  // Listen for events
  function events(){

  }

  function drawPath(){
    var path = document.querySelector("#circle-top path");
    var length = path.getTotalLength();
    var minutes = 0;
    var seconds = 10;

    var totalSeconds = minutes*60 + seconds;

    path.style.transition = path.style.WebkitTransition =
      'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset ' + totalSeconds + 's linear';

    path.style.strokeDashoffset = '0';

    setTimeout(function(){
      var offset = length - (length / totalSeconds * 2);
      path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 0s linear';
      path.style.strokeDashoffset = offset;
    }, 2000);
  }

  return {
    init: init
  };
})();

Pomodoro.init();