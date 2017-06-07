$(document).ready(() => {
  $('.mobile-menu').click(() => {
    $('main').addClass('noscroll')
    $('#mobile-dropdown').css('top', '0vh')
    document.ontouchmove = (e) => e.preventDefault()
  })

  $('.exit, .dropdown-links li:nth-child(3)').click(() => {
    $('main').removeClass('noscroll')
    $('#mobile-dropdown').css('top', '-100vh')
    document.ontouchmove = () => true
  })
})