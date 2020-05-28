
$(function ()
{
    jQuery(".multiple-items").not('.slick-initialized').slick({

        infinte: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        tabindex: false,
        autoplay: true,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})




$(function ()
{
    jQuery(".gallery-items").not('.slick-initialized').slick({

        infinte: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        tabindex: false,
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        autoplaySpeed: 2000,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})