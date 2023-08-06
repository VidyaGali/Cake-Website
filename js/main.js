// ######################################### drodown ######################################

$(document).ready(function(){
  $('.dropdown-toggle').dropdown()
});

// ######################################### counter ######################################


$('.counter').counterUp({
  delay: 5,
  time: 1000
});

// ######################################### owl-carousel ######################################


$(".owl-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  margin: 45,
  dots: true,
  loop: true,
  center: true,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});

  


// ####################################### scroll smooth ##############################################
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// ###################################### Navbar ############################################
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById("Navbar").classList.add("fixed-top");
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById("Navbar").classList.remove("fixed-top");
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

$(document).ready(function () {


  $('body').scrollspy({
      target: "#Navbar",
      offset: 0
  });
  
  $(window).scroll(function(){
      $(".nav-item").removeClass("active");
      $(".active").parent().addClass("active");
    })
    
  });




  // ###################################### preloader ############################################

  var loading=document.getElementById("preloader");
  window.addEventListener("load",function(){
      loading.style.display="none";
      
  })
  

