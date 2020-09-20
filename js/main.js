$(function(){

    // Slick Slider
  
    $('.header__slider').slick({
        infinite: true,
        fade :true,
        prevArrow: '<img class="header__slider-btn slider-left" src="images/icons/arrow-left-white.svg" alt=""></img>',
        nextArrow: '<img class="header__slider-btn slider-right"src="images/icons/arrow-right-white.svg" alt=""></img>',
        asNavFor:$('.header__slider-dots, .header__slider-maps')
    });
    $('.header__slider-dots').slick({
        infinite: true,
        asNavFor:$('.header__slider, .header__slider-maps'),
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows:false
    });
    $('.header__slider-maps').slick({
        infinite: true,
        asNavFor:$('.header__slider-dots, .header__slider'),
        slidesToShow: 1,
        slidesToScroll: 1,
        fade :true,
        arrows:false
    });

  $('.surf-map__wrapper').slick({
      infinite: true,
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: $('.surf-slider, .travel-slider, .sleep-slider, .shop-slider'),
  });
    $('.surf-slider').slick({
        infinite: true,
        prevArrow: '<img class="surf-slider__btn slider-left" src="images/icons/arrow-left-white.svg" alt=""></img>',
        nextArrow: '<img class="surf-slider__btn slider-right"src="images/icons/arrow-right-white.svg" alt=""></img>',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
      asNavFor: $('.surf-map__wrapper, .travel-slider, .sleep-slider, .shop-slider'),
    });
     $('.travel-slider').slick({
        infinite: true,
        prevArrow: '<img class="holder-slider__btn slider-left" src="images/icons/arrow-left-white.svg" alt=""></img>',
        nextArrow: '<img class="holder-slider__btn slider-right"src="images/icons/arrow-right-white.svg" alt=""></img>',
        slidesToShow: 1,
        slidesToScroll: 1,
       asNavFor: $('.surf-slider, .surf-map__wrapper, .sleep-slider, .shop-slider'),
    });
  $('.sleep-slider').slick({
    infinite: true,
    prevArrow: '<img class="holder-slider__btn slider-left" src="images/icons/arrow-left-white.svg" alt=""></img>',
    nextArrow: '<img class="holder-slider__btn slider-right"src="images/icons/arrow-right-white.svg" alt=""></img>',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $('.surf-slider, .surf-map__wrapper, .travel-slider, .shop-slider'),
  });
  $('.shop-slider').slick({
    infinite: true,
    prevArrow: '<img class="shop-slider__btn slider-left" src="images/icons/arrow-left-white.svg" alt=""></img>',
    nextArrow: '<img class="shop-slider__btn slider-right"src="images/icons/arrow-right-white.svg" alt=""></img>',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $('.surf-slider, .surf-map__wrapper, .travel-slider, .sleep-slider'),
  });


    // Search
    $('.header-nav__search img').on('click', function(){
      $('.header-nav__search-input').toggleClass('active');
    });

    //Date
    function Day() {
      var d = new Date();
      var day = d.getDate();

      if (day <= 9) day = "0" + day;
      
       $(".header-nav__day").html(day);
    }

    function monthYear() {
      var d = new Date();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();

      if (month <= 9) month = "0" + month;

      var date = month + " | " + year;
      $(".header-nav__month-year").html(date);
    }
    
    Day();
    monthYear();

    // plus and minus
     $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newValue = oldValue;
        } else {
          newValue = oldValue + 1;
        }
        spinner.find("input").val(newValue);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newValue = oldValue;
        } else {
          newValue = oldValue - 1;
        }
        spinner.find("input").val(newValue);
        spinner.find("input").trigger("change");
      });

    });

    // summ

  let summ = $('.nights').val() * $('.summ').data('nights') * $('.guests').val();
  $('.summ').html(summ);

  $('.quantity-button').on("click", function () {
    let summ = $('.nights').val() * $('.summ').data('nights') * $('.guests').val();
    $('.summ').html(summ);
  });

  $('.shop-slider__good-box-circle').on('click', function(){
    $(this).find('.box-plus ').toggleClass('active');
    $(this).find('.box-minus').toggleClass('active');
    $(this).siblings('.shop-slider__good-box-content').toggleClass('active');
  });

});