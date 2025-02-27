$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('.smooth-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Add active class to nav items when scrolling
  $(window).scroll(function() {
    const scrollDistance = $(window).scrollTop();
    $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance + 100) {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $('.navbar-nav .nav-item').eq(i).addClass('active');
      }
    });
  }).scroll();

  // Toggle navbar background on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.main-navbar').addClass('bg-dark');
    } else {
      $('.main-navbar').removeClass('bg-dark');
    }
  });
});

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');
  const name = form.elements['name'].value;

  swal({
    title: "Thank you, " + name + "!",
    text: "Your message has been sent successfully. I'll get back to you soon!",
    icon: "success",
    button: "Close",
  });

  form.reset();
}