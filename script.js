$(document).ready(function () {
    const images = [
        "https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg",
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://img.freepik.com/free-photo/view-chameleon-with-bright-neon-colors_23-2151682734.jpg",
        "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        "https://tappy.pl/wp-content/uploads/2021/01/AdobeStock_175035851.jpeg"
    ];

    let slideIndex = 0;

    images.map((imageSrc, index) => {
        const slide = `<div class="slide${index === 0 ? ' active' : ''}">
                         <img src="${imageSrc}" alt="Image ${index + 1}">
                       </div>`;
        $("#slideshow-container").append(slide);

        const thumbnail = `<img src="${imageSrc}" class="thumbnail${index === 0 ? ' active' : ''}" data-index="${index}" alt="Thumbnail ${index + 1}">`;
        $("#thumbnail-container").append(thumbnail);
    });

    function showSlide(n) {
        $(".slide").removeClass("active").hide();
        $(".thumbnail").removeClass("active");

        $(".slide").eq(n).addClass("active").fadeIn(500);
        $(".thumbnail").eq(n).addClass("active");

        slideIndex = n;
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= $(".slide").length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = $(".slide").length - 1;
        }
        showSlide(slideIndex);
    }

    $(".next").on("click", nextSlide);

    $(".prev").on("click", prevSlide);

    $(".thumbnail-container").on("click", ".thumbnail", function() {
        let index = $(this).data("index");
        showSlide(index);
    });
});