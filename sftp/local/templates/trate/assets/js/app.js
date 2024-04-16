$(document).ready(function() {
  $(".header__bottom__burger__btn_a, .header__adaptiv__menu__exit_btn__a").click(function() {
    $(".header__adaptiv").toggleClass("active");      
    $("body").toggleClass("dont-scroll"); 
    $("header").toggleClass("active");
  })

  let header = document.querySelector('.header__bottom');

  window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= 39) {
      header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
  })

  // $('.header__adaptiv__menu__nav_li, .header__adaptiv__menu__nav__2_menu').click(function() {
  //   $('.header__adaptiv__menu__nav__2_menu').toggleClass('active');
  // })

  // $('.header__adaptiv__menu__nav__2_menu__back').click(function() {
  //   $('.header__adaptiv__menu__nav__2_menu').toggleClass('active');
  // })

  $('.order-call, .call__wrap__exit').click(function() {
    $('.modal-order-call').toggleClass('active');
    $("body").toggleClass("dont-scroll"); 
  })

  // $('.brix---accordion-items, .modal_detail__exit').click(function() {
  //   $('.modal_detail_info').toggleClass('active');
  //   $("body").toggleClass("dont-scroll");
  // })

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
    breakpoints: {
      1179: {
        slidesPerGroup: 6,
      }

    }
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

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $('.keys__filter__form__select, .feedback__green__form__select, .contacts__grid__form__select').niceSelect();

  $("#filter-btn-news").click(function() {
    $(".news__filter__btns").toggleClass("active");      
    $("body").toggleClass("dont-scroll");  
  })

  $("#filter-btn-news-exit").click(function() {
    $(".news__filter__btns").toggleClass("active");       
    $("body").removeClass("dont-scroll"); 
  })

  var accBtn = document.getElementsByClassName("catalog__filter__acardion__btn");
  var accInt;

  for (accInt = 0; accInt < accBtn.length; accInt++) {
    accBtn[accInt].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      console.log(panel);
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var liElements = document.querySelectorAll('.implant_details_info__grid__txt__li');
  var imgElements = document.querySelectorAll('.implant_details_info__grid__img__replace');

  liElements.forEach(function(li, index) {
      li.addEventListener('click', function() {
          // Удаление класса active у всех элементов списка
          liElements.forEach(function(li) {
            li.classList.remove('active');
          });
          // Добавление класса active к текущему элементу списка
          this.classList.add('active');

          // Удаление класса active у всех изображений
          imgElements.forEach(function(img) {
              img.classList.remove('active');
          });
          // Добавление класса active к соответствующему изображению
          imgElements[index].classList.add('active');
      });
  });

  var headerA = document.getElementsByClassName("header__adaptiv__menu__nav_a");
  var int;

  for (var int = 0; int < headerA.length; int++) {
    headerA[int].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel) {
            panel.classList.toggle("active");
            console.log('click');
        }
    });
    // Добавляем обработчик для кнопки backBtn
    let backBtn = headerA[int].nextElementSibling.querySelector('.header__adaptiv__menu__nav__2_menu__back');

    if(backBtn){
        backBtn.addEventListener("click", function() {
            var panel = this.parentElement;
            panel.classList.toggle("active");
        });
    }
  }
});













