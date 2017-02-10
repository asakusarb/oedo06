$ ->
  toTop = $('.js-to-header')
  showToTOP = ->
    if $(window).scrollTop() > 100
      toTop.addClass('is-active')
    else
      toTop.removeClass('is-active')
  $(window).scroll showToTOP
  $('body').bind 'touchmove', showToTOP
