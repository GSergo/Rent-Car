//Код на jQuery
$(document).ready(function () {


 
 //Функционал для плавной прокрутки при клике на якорные ссылки в меню
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });


  //Функционал для кнопки прокрутки вверх
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 100) {
  //       $('.scrollup').fadeIn();
  //   } else {
  //       $('.scrollup').fadeOut();
  //   }
  //   });
      
  //   $('.scrollup').click(function(){
  //   $("html, body").animate({ scrollTop: 0 }, 600);
  //   return false;
  // });
 
    //Слайдер в О НАШЕМ АВТОМОБИЛЕ
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
       
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    var next = $('.swiper-button-next')
    var prev = $('.swiper-button-prev')
 
  

    //анимация 
    new WOW().init();

    //валидация формы

    //форма в футере
    // $('.footer__form').validate({
    //   errorClass: "invalid",  //меняем назвнаие класса
    //   rules: {
    //     userName: {
    //       required: true,
    //       minlength: 2
    //     },
    //     userPhone: {
    //       required: true,
    //       minlength: 17
    //     },
    //     userQuestion: {
    //       required: true,
    //       minlength: 10
    //     },
    //     policyCheckbox: {
    //       required: true,
    //     }
    //   }, //сообщения 
    //   messages: {
    //     userName: {
    //       required: "Имя обязательно",
    //       minlength: "Имя не короче 2-х букв"
    //     },
    //     userPhone: {
    //       required: "Телефон обязателен",
    //       minlength: "Номер слишком короткий, проверьте написание"
    //     },
    //     userQuestion: {
    //       required: "Вопрос обязателен",
    //       minlength: "Вопрос должен быть не короче 10 букв"
    //     },
    //     policyCheckbox: {
    //       required: "Дайте свое согласие"
    //     }
    //   }

    // });
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
    //Автоматический запуск видео при клике на нашу кнопку
    function videoPlay(event) {
      event.target.playVideo();
    }


    $('img.footer__img').each(function(){
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

});