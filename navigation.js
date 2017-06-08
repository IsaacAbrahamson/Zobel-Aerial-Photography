$(document).ready(function() {
  $('.mobile-menu').click(function() {
    $('main').addClass('noscroll')
    $('#mobile-dropdown').css('top', '0vh')
    document.ontouchmove = function(e) { e.preventDefault()}
  })

  $('.exit, .dropdown-links li:nth-child(3)').click(function() {
    $('main').removeClass('noscroll')
    $('#mobile-dropdown').css('top', '-100vh')
    document.ontouchmove = function() { return true }
  })
})