$(function() {
    $(".menu1").on('click',
      function() {
        $(".menuSub1").slideToggle(500);
      });
      $(".menu2").on('click',
      function() {
        $(".menuSub2").slideToggle(500);
      });
      $(".menu3").on('click',
      function() {
        $(".menuSub3").slideToggle(500);
      });
      
      $(".menubtn").on('click',
      function() {
        $(".navlist").slideToggle(200);
      });

      window.addEventListener('resize', (event) => {
        var window_w = window.innerWidth;
        if(window_w>757){
          $(".navlist").css('display','flex'); 
        }else{
          $(".navlist").css('display','none'); 
        }
      });

      $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".block").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
      });
 });
  const mySwiper = new Swiper('.swiper', {
    loop: true, 
    loopedSlides: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: { 
        delay: 5000, 
        disableOnInteraction: false, 
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,// スクロールバーが常に表示される
        draggable: true,
      },

    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        
      }
 

  });
 
