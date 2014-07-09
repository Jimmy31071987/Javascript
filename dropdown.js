  $(function () {
            $("#Header_Nav ul li").hover(function () { $(this).children("ul").stop().fadeIn("slow"); },
                                   function () { $(this).children("ul").stop().fadeOut("slow"); })
        });
        
