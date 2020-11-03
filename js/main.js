$(function() {

    $(".slider__wrapper").slick({
        // код взятый из https://github.com/kenwheeler/slick/
        // создать классы slick-btn для построения стрелок в css
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        // для построения точек слайда исп https://github.com/kenwheeler/slick/:
        dots: true,
        // для того чтобы убрать стрелки в слайдере урок 9 1:50:00
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: false,
            }

        }]

    });

    $('.map__bg').click(function() {
        $(this).toggleClass('active');
    });

    // код взятый из https://gist.github.com/Silver8Light/cf3860e6cf3f154eba744e1da47910d4
    $(".tabs__wrapper .tab").click(function() {
        $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // код взятый из https://github.com/patrickkunka/mixitup/ значение в скобках меняется
    var mixer = mixitup('.portfolio__container');


    // плавный скрол по якорной ссылке 9 урок 50 минута
    // код взятый из https://webcomplex.com.ua/jquery/plavnyj-skroll-posle-nazhatiya-na-yakornuyu-ssylku.html
    // вместо решетки меню поствить точку
    // чтобы сработала стрелочка внизу сайта, нужно добавить класс up после menu
    $(".menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".up").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        
        $('body,html').animate({ scrollTop: top }, 2000);
    });


    // для кнопки меню пояснение урок 9   1: 10: 00
    $('.menu__btn').click(function() {
        $('.menu ul').slideToggle();
    });

});