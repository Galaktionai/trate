$(document).ready(function() {
  $(".header__bottom__burger__btn_a, .header__adaptiv__menu__exit_btn__a").click(function() {
    $(".header__adaptiv").toggleClass("active");      
    $("body").toggleClass("dont-scroll"); 
  })


  $('.header__adaptiv__menu__nav_li, .header__adaptiv__menu__nav__2_menu').click(function() {
    $('.header__adaptiv__menu__nav__2_menu').toggleClass('active');
  })

  $('.header__adaptiv__menu__nav__2_menu__back').click(function() {
    $('.header__adaptiv__menu__nav__2_menu').toggleClass('active');
  })

  $('.order-call, .modal-order-call__bacgroaund, .call__wrap__exit').click(function() {
    $('.modal-order-call').toggleClass('active');
    $("body").toggleClass("dont-scroll"); 
  })

  $('.call__wrap__form__submit, .modal-order-call__bacgroaund, .call__wrap__exit').click(function() {
    $('.modal-order-call-succes').toggleClass('active');
    $("body").toggleClass("dont-scroll"); 
  })

  $("#filter-btn, #filter-btn-news-exit").click(function() {
    $(".gallery-block").toggleClass("active");      
    $("body").toggleClass("dont-scroll"); 
  })

  // $('.footer_nav__two__title').click(function() {
  //   $('.footer_nav__two__nav').toggleClass('active');
  // })

  var acc = document.getElementsByClassName("footer_nav__two__title");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.removeClass.toggle("active");
      } else {
        panel.classList.toggle("active");
      } 
    });
  }
    


  var swiper = new Swiper(".studyGalery", {
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next-gala',
      prevEl: '.swiper-button-prev-gala',
    },
  });
  
  var swiper = new Swiper(".seteficatsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next-gala',
      prevEl: '.swiper-button-prev-gala',
    },
  });
  
  var swiper = new Swiper(".autorsSwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-gala',
      prevEl: '.swiper-button-prev-gala',
    },
  });

  var swiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-main-slider',
      prevEl: '.swiper-button-prev-main-slider',
    },
  });

  var swiper = new Swiper(".keys_detail__slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next-keys_detail',
      prevEl: '.swiper-button-prev-keys_detail',
    },
  });

  var swiper = new Swiper(".events-detail", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next-keys_detail',
      prevEl: '.swiper-button-prev-keys_detail',
    },
  });
  
  var swiper = new Swiper(".keys_detail__photos__bottom", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next-keys_detail',
      prevEl: '.swiper-button-prev-keys_detail',
    },
  });


  $('.keys__filter__form__select, .feedback__green__form__select').niceSelect();

  $("#filter-btn-news").click(function() {
    $(".news__filter__btns").toggleClass("active");      
    $("body").toggleClass("dont-scroll");  
  })

  $("#filter-btn-news-exit").click(function() {
    $(".news__filter__btns").toggleClass("active");       
    $("body").removeClass("dont-scroll"); 
  })
});