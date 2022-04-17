(function() {

    var indicator = $('#indicator');
    var counter = indicator.find('span');
  
    var win = jQuery(window);
    if (indicator.length) {
      var moveIndicator = debounce(function() {
        var viewportHeight = $(window).height();
        var documentHeight = $(document).height();
        var hasScrolled = $(window).scrollTop();
  
        var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
        indicator.css("top", percent + "%");
        counter.html(Math.floor(percent) + "%");
  
      }, 10);
  
    }
  
    win.on("resize scroll", moveIndicator);
  
    function debounce(func, wait, immediate) {
      var timeout;
  
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  
  }());



  // buy buttom
  var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }
  