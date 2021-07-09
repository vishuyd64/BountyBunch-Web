

function scrollall(){
    $(window).on('scroll',function(){
        if ($(window).scrollTop() >= 1) {
          $('.headerCode').addClass('fixedHeader');
      } else {
          $('.headerCode').removeClass('fixedHeader');
      }
      });
}

function value(){
    $(document).on('click','.catagroisLeft .nav-tabs .nav-link',function(){
       var x = $(this).text();
$('.catagRight h2.second').attr('text',x);

    });
}

function password(){
    $(document).on('click','.eye',function(){
 $(this).addClass('active');
 $(this).children('.fa').removeClass('fa-eye-slash');
 $(this).children('.fa').addClass('fa-eye');
 $(this).siblings('input').attr('type','text');
    });
    $(document).on('click','.eye.active',function(){
        $(this).removeClass('active');
        $(this).children('.fa').addClass('fa-eye-slash');
        $(this).children('.fa').removeClass('fa-eye');
        $(this).siblings('input').attr('type','password');
           });
}


function country(){
    $(document).on('click','.phonecode ul li.iti__country',function(){
   var x = $(this).find('.iti__dial-code').text();

   $('.code').attr('value',x);
    });

    // $(document).on('click','.formControl,.phonecode .iti__selected-flag',function(){
    //    $('.iti__country-list').show();
    // });
    // $(document).on('click','.phonecode ul li.iti__country',function(){
    //     $('.iti__country-list').hide();
    //  });
}

function hidee(){
    // document.addEventListener("mousedown", function (event) {
    //     if (event.target.closest(".formControl,.phonecode .iti__selected-flag"))
    //         return;
    //         $('.iti__country-list').hide();
    // });
}

function scrollstrip(){
    $(window).on('scroll',function(){
        if ($(window).scrollTop() >= 400) {
    //   $('.strip').animate({bottom : '0'});
    $('.strip').addClass('active');
      } 
      else {
        // $('.strip').animate({bottom : '-82px'},1000);
        $('.strip').removeClass('active');
      }
      });
}

function scrolltop(){

    $(document).on('click','.scroll',function(){
        $("html").animate({ scrollTop: 0 }, "slow");
        // alert('okk');
    });
}