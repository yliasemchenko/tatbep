$( document ).ready(function() {


    // Fancybox
    Fancybox.bind("[data-fancybox]", {

    });

    if($(".custom_icon").length){
        $(".custom_icon").load("https://cotes.ru/wp-content/themes/cotes/oxid_icons.php");
    };


$(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      $(".navbar_top_end_img a img").addClass("navbar_top_end_img_black");
      $(".navbar_end img").addClass("navbar_top_end_img_black");
      $("header").addClass("black").css("background","#fff");
      $('.mobile_header').addClass('mobile_header_white_scroll');
      $(".toggle_logo_found img.white").removeClass("active");
      $(".toggle_logo_found img.black").addClass("active");
      $(".white_found").hide();
      $(".black_found").show();
      localStorage.setItem("header_active", "scroll");
    } else {
      $('.mobile_header').removeClass('mobile_header_white_scroll');
      $(".toggle_logo_found img.white").addClass("active");
      $(".toggle_logo_found img.black").removeClass("active");  
      localStorage.setItem("header_active", "top");
    } 
});

if("scroll" === localStorage.getItem("header_active")){
    $(".navbar_top_end_img a img").addClass("navbar_top_end_img_black");
    $(".navbar_end img").addClass("navbar_top_end_img_black");
    $("header").addClass("black").css("background","#fff");
    $('.mobile_header').addClass('mobile_header_white_scroll');
    $(".toggle_logo_found img.white").removeClass("active");
    $(".toggle_logo_found img.black").addClass("active");
    $(".white_found").hide();
    $(".black_found").show();
}
if("top" === localStorage.getItem("header_active")){
    $('.mobile_header').removeClass('mobile_header_white_scroll');
    $(".toggle_logo_found img.white").addClass("active");
    $(".toggle_logo_found img.black").removeClass("active");  
}


$(".burger").click(function(){
    $(".mobile_header_secret").toggleClass("mobile_header_secret_active");
    $(".mobile_header").toggleClass("mobile_header_white");
    if($(".mobile_header").hasClass("mobile_header_white")){
        $(".toggle_logo_found img.white").removeClass("active");
        $(".toggle_logo_found img.black").addClass("active");
    }else{
        $(".toggle_logo_found img.white").addClass("active");
        $(".toggle_logo_found img.black").removeClass("active");
        if($(".mobile_header").hasClass("mobile_header_white_scroll")){
            $(".toggle_logo_found img.white").removeClass("active");
            $(".toggle_logo_found img.black").addClass("active");
        }
    }
    $(".line").toggleClass("line_active");
    $(".line_2").toggleClass("line_2_active");
    $(".line_3").toggleClass("line_3_active");
});


$(".nav-item-row").click(function(){
    $(this).find("a").toggleClass("a_active");
    $(this).find("svg").toggleClass("svg_active");
});

$(".nav-item-row-lvl").click(function(){
    $(this).find("a").toggleClass("a_active");
    $(this).find("svg").toggleClass("svg_active");
});


$(".nav-item-row-one").click(function(){
    $(".secret_ul_mobile_one").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-two").click(function(){
    $(".secret_ul_mobile_two").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-three").click(function(){
    $(".secret_ul_mobile_three").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-four").click(function(){
    $(".secret_ul_mobile_four").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-five").click(function(){
    $(".secret_ul_mobile_five").toggleClass("secret_ul_mobile_active");
});


$(".nav-item-row-lvl-one").click(function(){
    $(".secret_ul_mobile_lvl_one").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-lvl-two").click(function(){
    $(".secret_ul_mobile_lvl_two").toggleClass("secret_ul_mobile_active");
});
$(".nav-item-row-lvl-three").click(function(){
    $(".secret_ul_mobile_lvl_three").toggleClass("secret_ul_mobile_active");
});


// фильтр
$(".news_btn_filter").click(function(){
    $(".news_filter").addClass("news_filter_active");
});

$(".toggle_news_mobile").click(function(){
    $(".news_filter").removeClass("news_filter_active");
});

// удаление пустых абзацев


$('p').each(function() {
    const $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
        $this.remove();
});

$('h1').each(function() {
    const $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
        $this.remove();
});


// // news
// if ($('.news_body').length){
//     $('.toggle_news_years').click(function(){
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $(this).addClass('toggle_news_years_active');
//     });
//     $('.toggle_news_years_all').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_default').addClass('news_body_active');
//         localStorage.setItem("news_selected", "all");
//     });
//     $('.toggle_news_years_2016').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2016').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2016");
//     });
//     $('.toggle_news_years_2017').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2017').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2017");
//     });
//     $('.toggle_news_years_2018').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2018').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2018");
//     });
//     $('.toggle_news_years_2019').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2019').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2019");
//     });
//     $('.toggle_news_years_2020').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2020').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2020");
//     });
//     $('.toggle_news_years_2021').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2021').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2021");
//     });
//     $('.toggle_news_years_2022').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2022').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2022");
//     });
//     $('.toggle_news_years_2023').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2023').addClass('news_body_active');
//         localStorage.setItem("news_selected", "2023");
//     });
//     $('.news_filter_toggle_1').click(function(){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_otr_one').addClass('news_body_active');
//         localStorage.setItem("news_selected", "otr_one");
//     });

//     // news_years
//     if("all" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_default').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_all').addClass('toggle_news_years_active');
//     }
//     if("2016" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2016').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2016').addClass('toggle_news_years_active');
//     }
//     if("2017" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2017').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2017').addClass('toggle_news_years_active');
//     }
//     if("2018" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2018').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2018').addClass('toggle_news_years_active');
//     }
//     if("2019" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2019').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2019').addClass('toggle_news_years_active');
//     }
//     if("2020" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2020').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2020').addClass('toggle_news_years_active');
//     }
//     if("2021" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2021').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2021').addClass('toggle_news_years_active');
//     }
//     if("2022" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2022').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2022').addClass('toggle_news_years_active');
//     }
//     if("2023" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_2023').addClass('news_body_active');
//         $('.toggle_news_years').removeClass('toggle_news_years_active');
//         $('.toggle_news_years_2023').addClass('toggle_news_years_active');
//     }

//     // news_otr
//     if("otr_one" === localStorage.getItem("news_selected")){
//         $('.news_body_secret').removeClass('news_body_active');
//         $('.news_body_otr_one').addClass('news_body_active');
//     }

// };


// product hover
if ($('.product_div').length){
    $('.product_div').mouseover(function(){
        $('.product_div_big h2').text($(this).find('h2').text());
        $('.product_div_big p').text($(this).find('.product_text_secret p').text());
        $('.product_div_big .product_div_img img').attr('src', $(this).find('.product_div_img img').attr('src'));
        $('.product_div_big').attr('href', $(this).attr('href'));
    });
};

// swiper главная

if ($('.swiper_main').length){
    const swiper_main = new Swiper('.swiper_main', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        effect: "fade",
        parallax: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
    });
};

if ($('.swiper_team_bottom').length){
    const swiper_team_bottom = new Swiper('.swiper_team_bottom', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
};


if ($('.swiper_terms').length){
    const swiper_terms = new Swiper('.swiper_terms', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },  
        navigation: {
            prevEl: '.swiper-button-prev-terms',
            nextEl: '.swiper-button-next-terms'
        },
    });
        
    const swiperPrev_terms = document.getElementById('swiperPrev_terms')
    const swiperNext_terms = document.getElementById('swiperNext_terms')
        
    if($("#swiperPrev_terms")){
        $(swiperPrev_terms).click(function(){
            swiper_terms.slidePrev();
        })
    }
    if($("#swiperNext_terms")){
        $(swiperNext_terms).click(function(){
            swiper_terms.slideNext();
        })
    }
};

if ($('.swiper_rukovodstvo').length){
    const swiper_rukovodstvo = new Swiper('.swiper_rukovodstvo', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },  
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
    });
        
    const swiperPrev_rukovodstvo = document.getElementById('swiperPrev_rukovodstvo')
    const swiperNext_rukovodstvo = document.getElementById('swiperNext_rukovodstvo')
        
    if($("#swiperPrev_rukovodstvo")){
        $(swiperPrev_rukovodstvo).click(function(){
            swiper_rukovodstvo.slidePrev();
        })
    }
    if($("#swiperNext_rukovodstvo")){
        $(swiperNext_rukovodstvo).click(function(){
            swiper_rukovodstvo.slideNext();
        })
    }
};

if ($('.swiper-career').length){
    const swiper_career = new Swiper('.swiper-career', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },  
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
    });
        
    const swiperPrev_career = document.getElementById('swiperPrev_career')
    const swiperNext_career = document.getElementById('swiperNext_career')
        
    if($("#swiperPrev_career")){
        $(swiperPrev_career).click(function(){
            swiper_career.slidePrev();
        })
    }
    if($("#swiperNext_career")){
        $(swiperNext_career).click(function(){
            swiper_career.slideNext();
        })
    }
};

if ($('.swiper_object').length){
    const swiper_object = new Swiper('.swiper_object', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination-obj',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },  
        navigation: {
            prevEl: '.swiper-button-prev-object',
            nextEl: '.swiper-button-next-object'
        },
    });
};

if ($('.swiper_clients').length){
    const swiper_clients = new Swiper('.swiper_clients', {
        slidesPerView: 3,  
        loop: true,
        spaceBetween: 0,
        disabledClass: 'my-button-disabled',
        navigation: {
            prevEl: '.swiper-button-prev-clients',
            nextEl: '.swiper-button-next-clients'
        },
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            778: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3
            },
        },
		autoplay: {
		delay: 2000,
	  },
    });
	
	// Add mouse enter and leave event listeners
	
/*
	$(".swiper_clients").mouseenter(function() {
	   swiper_clients.autoplay.stop(); // Stop autoplay on mouse enter
	});

	$(".swiper_clients").mouseleave(function() {
	   swiper_clients.autoplay.start(); // Start autoplay on mouse leave
	});
*/
};

if ($('.swiper_projects').length){
    const swiper_projects = new Swiper('.swiper_projects', {
        slidesPerView: 3,  
        loop: false,
        spaceBetween: 70,  
        navigation: {
            prevEl: '.swiper-button-prev-projects',
            nextEl: '.swiper-button-next-projects'
        },
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            778: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            },
        },
    });
};


if ($('.swiper_news_years').length){
    const swiper_news_years = new Swiper('.swiper_news_years', {
        slidesPerView: 8,  
        loop: false,
        spaceBetween: 20,  
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
    });
        
    const swiperPrev_news_years = document.getElementById('swiperPrev_news_years')
    const swiperNext_news_years = document.getElementById('swiperNext_news_years')
        
    if($("#swiperPrev_news_years")){
        $(swiperPrev_news_years).click(function(){
            swiper_news_years.slidePrev();
        })
    }
    if($("#swiperNext_news_years")){
        $(swiperNext_news_years).click(function(){
            swiper_news_years.slideNext();
        })
    }
};


if ($('#for_who').length){

    $('.for_who_button').click(function(){
        $('.for_who_button').removeClass('for_who_button_active');
        $(this).addClass('for_who_button_active');
    });

    $('.for_who_button_one').click(function(){
        $('.for_who_row').removeClass('for_who_row_active');
        $('.for_who_row_one').addClass('for_who_row_active');
    });

    $('.for_who_button_two').click(function(){
        $('.for_who_row').removeClass('for_who_row_active');
        $('.for_who_row_two').addClass('for_who_row_active');
    });

    $('.for_who_button_three').click(function(){
        $('.for_who_row').removeClass('for_who_row_active');
        $('.for_who_row_three').addClass('for_who_row_active');
    });
    $('.for_who_button_four').click(function(){
        $('.for_who_row').removeClass('for_who_row_active');
        $('.for_who_row_four').addClass('for_who_row_active');
    });
    $('.for_who_button_five').click(function(){
        $('.for_who_row').removeClass('for_who_row_active');
        $('.for_who_row_five').addClass('for_who_row_active');
    });
};


if ($('#numbers').length){
    $('.toggle_text_one_div').mouseover(function(){
        $('.toggle_text_one').text('Перейти в проекты');
    }).mouseout(function(){
        $('.toggle_text_one').text('Мы выполнили более 1100 проектов по проектированию, автоматизации и новому строительству в сфере энергетики и промышленности');
    });
    
    $('.toggle_text_two_div').mouseover(function(){
        $('.toggle_text_two').text('Познакомиться с командой');
    }).mouseout(function(){
        $('.toggle_text_two').text('В нашей живой команде более 150 профессиональных и неравнодушных котэсовцев');
    });

    $('.toggle_text_three_div').mouseover(function(){
        $('.toggle_text_three').text('Перейти в патенты');
    }).mouseout(function(){
        $('.toggle_text_three').text('Мы изобретаем устройства и технологии, помогающие сделать энергетику эффективнее, надёжнее и экологичнее');
    });
};


if ($('.swiper_news_post').length){

    const swiper_thumbnail = new Swiper(".swiper_thumbnail_news_post", {  //added
        slidesPerView: 4,    
        spaceBetween: 12,
    })

    const swiper_news_post = new Swiper('.swiper_news_post', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 20,  
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        thumbs: {
            swiper: swiper_thumbnail,
            autoScrollOffset: 3,
        },
    });
        
    const swiperPrev_news_post = document.getElementById('swiperPrev_news_post')
    const swiperNext_news_post = document.getElementById('swiperNext_news_post')
        
    if($("#swiperPrev_news_post")){
        $(swiperPrev_news_post).click(function(){
            swiper_news_post.slidePrev();
        })
    }
    if($("#swiperNext_news_post")){
        $(swiperNext_news_post).click(function(){
            swiper_news_post.slideNext();
        })
    }
}

$(window).keyup(function(e){
	var target = $('.checkbox-other input:focus');
	if (e.keyCode == 9 && $(target).length){
		$(target).parent().addClass('focused');
	}
});

$('.checkbox-other input').focusout(function(){
	$(this).parent().removeClass('focused');
});

// о компании
if ($('.terms_div').length){

    $('.terms_left_one').click(function(){
        if ($(this).hasClass('terms_left_active')){
            $(this).parents('.terms_div').addClass('terms_body_hide');
            $(this).removeClass('terms_left_active');
        }else{
            $(this).parents('.terms_div').removeClass('terms_body_hide');
            $(this).addClass('terms_left_active');
        }
        if ($('terms_left_two').hasClass('terms_left_active')){

        }else{
            $('.terms_div_two').removeClass('terms_body_hide');
            $('.terms_left_two').addClass('terms_left_active');
        }
        if ($('terms_left_three').hasClass('terms_left_active')){

        }else{
            $('.terms_div_three').removeClass('terms_body_hide');
            $('.terms_left_three').addClass('terms_left_active');
        }
    });

    $('.terms_left_two').click(function(){
        if ($(this).hasClass('terms_left_active')){
            // $(this).parents('.terms_div').addClass('terms_body_hide');
            // $(this).removeClass('terms_left_active');
            $('.terms_div_one').addClass('terms_body_hide');
            $('.terms_left_one').removeClass('terms_left_active');
        }else{
            $(this).parents('.terms_div').removeClass('terms_body_hide');
            $(this).addClass('terms_left_active');
        }
        if ($('terms_left_three').hasClass('terms_left_active')){

        }else{
            $('.terms_div_three').removeClass('terms_body_hide');
            $('.terms_left_three').addClass('terms_left_active');
        }
    });

    $('.terms_left_three').click(function(){
        if ($(this).hasClass('terms_left_active')){
            // $(this).parents('.terms_div').addClass('terms_body_hide');
            // $(this).removeClass('terms_left_active');
            $('.terms_div_one').addClass('terms_body_hide');
            $('.terms_left_one').removeClass('terms_left_active');
            $('.terms_div_two').addClass('terms_body_hide');
            $('.terms_left_two').removeClass('terms_left_active');
        }else{
            $(this).parents('.terms_div').removeClass('terms_body_hide');
            $(this).addClass('terms_left_active');
        }
    });

    $('.terms_left_four').click(function(){
        if ($(this).hasClass('terms_left_active')){
            // $(this).parents('.terms_div').addClass('terms_body_hide');
            // $(this).removeClass('terms_left_active');
            $('.terms_div_one').addClass('terms_body_hide');
            $('.terms_left_one').removeClass('terms_left_active');
            $('.terms_div_two').addClass('terms_body_hide');
            $('.terms_left_two').removeClass('terms_left_active');
            $('.terms_div_three').addClass('terms_body_hide');
            $('.terms_left_three').removeClass('terms_left_active');
        }else{
            $(this).parents('.terms_div').removeClass('terms_body_hide');
            $(this).addClass('terms_left_active');
        }
    });
};



if ($('#history_about').length){
    const swiper_thumbnail_2 = new Swiper(".swiper_thumbnail_history", {
        slidesPerView: 10,
        spaceBetween: 20,
        slideToClickedSlide: true,
        centeredSlides: true,
        breakpoints: {
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            778: {
              slidesPerView: 6
            },
            1200: {
              slidesPerView: 10
            },
        },
    })
    const swiper_history_about = new Swiper('.swiper_history_about', {
        slidesPerView: 1,  
        loop: false,
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        thumbs: {
            swiper: swiper_thumbnail_2,
            autoScrollOffset: 1
        },
    });

    const swiperPrev_history = document.getElementById('swiperPrev_history')
    const swiperNext_history = document.getElementById('swiperNext_history')
        
    if($("#swiperPrev_history")){
        $(swiperPrev_history).click(function(){
            swiper_history_about.slidePrev();
        })
    }
    if($("#swiperNext_history")){
        $(swiperNext_history).click(function(){
            swiper_history_about.slideNext();
        })
    }
};


if ($('.patent_swiper').length){
    const patent_swiper = new Swiper('.patent_swiper', {
        slidesPerView: 3,  
        loop: false,
        spaceBetween: 70,  
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            778: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            },
        },
    });
        
    const swiperPrev_patent = document.getElementById('swiperPrev_patent')
    const swiperNext_patent = document.getElementById('swiperNext_patent')
        
    if($("#swiperPrev_patent")){
        $(swiperPrev_patent).click(function(){
            patent_swiper.slidePrev();
        })
    }
    if($("#swiperNext_patent")){
        $(swiperNext_patent).click(function(){
            patent_swiper.slideNext();
        })
    }
};

if ($('.news_section_row').length){
    $('.filter_toggle_model').click(function(){
        $(this).toggleClass('filter_toggle_active');
        $('.filter_model_secret').toggleClass('filter_model_secret_active');
    });

    $('.filter_toggle_down').click(function(){
        $(this).toggleClass('filter_toggle_active');
        $('.filter_down_secret').toggleClass('filter_down_secret_active');
    });
}


// product
var toggle_h1 = $(".section_padding_top h1").text();
if(toggle_h1=="Современные энергетические котлы"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_one').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-sovremennye-energeticheskie-kotly/');
    $('.back_news_div_news a').attr('href', '/novosti-sovremennye-energeticheskie-kotly/');
}
if(toggle_h1=="Безмазутный розжиг"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_two').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-bezmazutnyj-rozzhig/');
    $('.back_news_div_news a').attr('href', '/novosti-bezmazutnyj-rozzhig/');
}
if(toggle_h1=="Сажеобдувочные аппараты"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_three').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-sazheobduvochnye-apparaty/');
    $('.back_news_div_news a').attr('href', '/novosti-sazheobduvochnye-apparaty/');
}
if(toggle_h1=="Фундаменты динамических машин"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_four').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-fundamenty-dinamicheskih-mashin/');
    $('.back_news_div_news a').attr('href', '/novosti-fundamenty-dinamicheskih-mashin/');
}
if(toggle_h1=="БСУс пневмообрушением"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_five').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-bsu-s-pnevmoobrusheniem/');
    $('.back_news_div_news a').attr('href', '/novosti-bsu-s-pnevmoobrusheniem/');
}
if(toggle_h1=="Кольцевой котел"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_six').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-kolczevoj-kotel/');
    $('.back_news_div_news a').attr('href', '/novosti-kolczevoj-kotel/');
}
if(toggle_h1=="Содорегенерационные котлы"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_seven').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-sodoregeneraczionnye-kotly/');
    $('.back_news_div_news a').attr('href', '/novosti-sodoregeneraczionnye-kotly/');
}
if(toggle_h1=="Мониторинг выбросов"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_eight').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-monitoring-vybrosov/');
    $('.back_news_div_news a').attr('href', '/novosti-monitoring-vybrosov/');
}
if(toggle_h1=="Системы сухого золошлакоудаления"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_nine').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-sistemy-suhogo-zoloshlakoudaleniya/');
    $('.back_news_div_news a').attr('href', '/novosti-sistemy-suhogo-zoloshlakoudaleniya/');
}
if(toggle_h1=="Автоматизация"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_ten').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-avtomatizacziya/');
    $('.back_news_div_news a').attr('href', '/novosti-avtomatizacziya/');
}

var toggle_h1 = $(".section_padding_top h1").text();
if(toggle_h1=="ТЭО и предпроектные работы"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_usl_one').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-teo-i-predproektnye-raboty/');
    $('.back_news_div_news a').attr('href', '/novosti-teo-i-predproektnye-raboty/');
}
var toggle_h1 = $(".section_padding_top h1").text();
if(toggle_h1=="Инжиниринг"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_usl_two').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-inzhiniring/');
    $('.back_news_div_news a').attr('href', '/novosti-inzhiniring/');
}
var toggle_h1 = $(".section_padding_top h1").text();
if(toggle_h1=="Поставка оборудования"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_usl_three').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-postavka-oborudovaniya/');
    $('.back_news_div_news a').attr('href', '/novosti-postavka-oborudovaniya/');
}
var toggle_h1 = $(".section_padding_top h1").text();
if(toggle_h1=="Пусконаладка"){
    $('.primer_product').removeClass('primer_product_active');
    $('.primer_product_usl_four').addClass('primer_product_active');
    $('.back_news_div_project a').attr('href', '/proekty-puskonaladka/');
    $('.back_news_div_news a').attr('href', '/novosti-puskonaladka/');
}

$('.days_div_toggle').click(function(){
    $('.days_div_toggle').removeClass('days_div_toggle_active');
    $(this).addClass('days_div_toggle_active');
    $(".days_secret").removeClass('days_secret_active');
});

$('.days_div_toggle_one').click(function(){
    $(".days_secret_one").addClass('days_secret_active');
});
$('.days_div_toggle_two').click(function(){
    $(".days_secret_two").addClass('days_secret_active');
});
$('.days_div_toggle_three').click(function(){
    $(".days_secret_three").addClass('days_secret_active');
});
$('.days_div_toggle_four').click(function(){
    $(".days_secret_four").addClass('days_secret_active');
});


$("#patent_news").hide();

if($("#product_news .primer_product_active .news_div").length){
    $("#product_news").show();
} else {
    $("#product_news").hide();
}

if($("#product_primer .primer_product_active .primer_div").length){
    $("#product_primer").show();
} else {
    $("#product_primer").hide();
};

if($(".product_news_page_container_active").length){
    $(".product_news_add").show();
} else {
    $(".product_news_add").hide();
};

if($(".product_primer_page_container_active").length){
    $(".product_primer_add").show();
} else {
    $(".product_primer_add").hide();
};



/*
$('body').find('a').click(function(){
    $(this).attr('target','_blank');
});
*/
$('header').find('a').click(function(){
    $(this).attr('target','_self');
});

$('footer').find('a').click(function(){
    $(this).attr('target','_self');
});






});