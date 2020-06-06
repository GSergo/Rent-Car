//Код на jQuery
$(document).ready(function () {

  //Слайдер в блоке видео
  $('.slider1').owlCarousel({
    nav:true,
    loop: true,
    dots:false,
    margin: 35,
    navContainerClass: 'slider__nav',
    navClass: ['slider__btn_prev', 'slider__btn_next'],
    responsive:{
        0:{
            items:1
        },
        1250:{
            items:2
        }
    }
  })

  //Слайдер в блоке машина
  $('.slider2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    var num1 = (carousel.relative(carousel.current()) >= 9) ? '' : '0';
    var num2 = (carousel.items().length > 9) ? '/' : '0';
    $('.slider-counter').html( '<span class="num1">' + num1 + (carousel.relative(carousel.current()) + 1) + '</span><span class="slash">/</span><span class="num2">' + num2 + carousel.items().length + '</span>');
}).owlCarousel({
    nav:true,
    loop: true,
    dots:false,
    navContainerClass: 'slider__nav',
    navClass: ['slider2__btn_prev', 'slider2__btn_next'],
    responsive:{
        0:{
            items:1
        },
        4000:{
            items:1
        }
    }
  })

  //Слайдер в футере
  $('.slider3').owlCarousel({
    nav:true,
    loop: true,
    dots:false,
    navContainerClass: 'slider__nav',
    navClass: ['slider3__btn_prev', 'slider3__btn_next'],
    responsive:{
        0:{
            items:1
        },
        4000:{
            items:1
        }
    }
  })
  
 //Функционал для плавной прокрутки при клике на якорные ссылки в меню
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });


  //Функционал для кнопки прокрутки вверх
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    });
      
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
 

  //анимация 
  new WOW().init();

  //валидация формы

  //форма в order
  $('.order__form').validate({
    errorClass: "invalid",  //меняем назвнаие класса
    rules: {
      userPhone: {
        required: true,
        minlength: 17
      },
    }, //сообщения 
    messages: {
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Номер слишком короткий"
      }
    }
  });

  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш телефон:"});


  //Функционал для видео в блоке онлайн-контроль
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '450',
      width: '100%',
      videoId: '8kusjQDGEvg',
      events: {
        'onReady': videoPlay
      }
    });
  })

  var player2;
  $('.play_btn').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '450',
      width: '100%',
      videoId: '_Hu7-LsLoEs',
      events: {
        'onReady': videoPlay
      }
    });
  })

  var player3;
  $('.play_btn2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '450',
      width: '100%',
      videoId: 'pre14GZFMgE',
      events: {
        'onReady': videoPlay
      }
    });
  })
  
  //Автоматический запуск видео при клике на нашу кнопку
  function videoPlay(event) {
    event.target.playVideo();
  }

  //Подсвечивание svg-иконок в футере при наведении
  $('.footer__img').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  $('.slider3__btn_prev').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  //Бургер
  $('.header__burger').click(function(event) {
    $('.header__burger, .menu__nav, .menu-right, .menu').toggleClass('active');
  });

});