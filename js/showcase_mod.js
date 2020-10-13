// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");


  
  
});

// begin mod
// begin document content Read https://stackoverflow.com/questions/40525339/how-can-i-display-a-variable-content-in-html
  // help https://bulma.io/documentation/helpers/typography-helpers/
var text1="Lorem Ipsum";
var myString = 'A rather long string of English text, an error message \
                actually that just keeps going and going -- an error \
                message to make the Energizer bunny blush (right through \
                those Schwarzenegger shades)! Where was I? Oh yes, \
                you\'ve got an error and all the extraneous whitespace is \
                just gravy.  Have a nice day.';

                // I have a tendency to prototype 3D games whenever I get a vision in my head or during game jams. \n\n \

var _1_bio = "\nHi! My name is Wei Yuen Ng and I'm a self-taught gameplay programmer  who has previously interned in a local game studio.          \n \
As a game programmer, I have a habit of experimenting with technology and doing my own self-learning outside of work. \n \n\
I have a preference for 3D projects over 2D projects as I find them \n to be more fun and challenging to make.\n\n\
I'm currently developing some games under my current pen-name Solitude Entertainment, one of it is a 3D action game.\n SilentWolfStudios is my old pen name. \n\n \
I'll post more of my game dev progress later on, on itch.io \n \
My goal right now is to create and release my own debut game out there into the market.  \n  \n\
As of now, I'm unemployed due to Covid 19 as\n  I was recently forced to transfer from the University of Utah \n to UOW KDU's Bachelor of Game Development Program. \n\n \
You can find my portfolio regarding my past experiences and side projects below";
// As a game developer, I believe that the most important thing in \ngame development to find your own style and auteur in anything you do. \n \
// I'm currently unemployed due to COVID 19 and forced to transfer into \nKDU UOW's Bachelor in Game Development program from the University of Utah \n \
// to save money and time. But I am not seeking employment right now, \n \
// until I get a debut game out." ;

var _7_resume = "Preview My Resume and Reference Letter From MDEC and Ze Ren";
$(window).on("load", function() {
  
  document.getElementById('output').innerHTML = text1; // put code  <p id="output"></p>

  _1_bio = _1_bio.replace(new RegExp('\r?\n','g'), '<br />');


  document.getElementById('1_Bio').innerHTML = _1_bio; // put code  <p id="output"></p>
  document.getElementById('7_Resume').innerHTML = _7_resume; // put code  <p id="output"></p>

 // end document content

  //  end mod

  
  var Body = $("body");
  Body.addClass("preloader-site");
});
