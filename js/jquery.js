
            $(document).ready(function() {
                var touch = $('#touch-menu');
                var menu = $('.nav');
                
                $(touch).on('click', function(e) {
                    e.preventDefault();
                    menu.slideToggle();
                });
                $(window).resize(function(){
                    var wid = $(window).width();
                    if(wid > 760 && menu.is(':hidden')) {
                        menu.removeAttr('style');
                    }
                });
            });

            $(function() {

                $(window).scroll(function() {
               
                if($(this).scrollTop() != 0) {
               
                $('#go-top').fadeIn();
                
                } else {
               
                $('#toTop').fadeOut();
               
                }
               
                });
                
                $('#go-top').click(function() {
               
                $('body,html').animate({scrollTop:0},800);
               
                });
                
               });