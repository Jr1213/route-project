$(document).ready(function () {
    $('.slider .slick').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        fade: true
    })
    $('.phones .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    $('.tablate  .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
    $('.laptop  .slick').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
});


// eidt 

let heading = $('h3');
let list = $('footer ul li');
let edit = $('#edit');
let oldText = $("#oldText");
let closeBtn = $('.closed');
let saveBtn = $('.save');
let inputVal;

heading.click(function () {
    currentItem = $(this);
    let currentText = $(this).text();
    oldText.text(currentText)
    edit.css('display', 'flex');
    $('#inputVal').keyup(function () {
        inputVal = $("#inputVal").val();
    });
    saveBtn.click(function () {
        currentItem.text(inputVal);
        $("#inputVal").val('');
        edit.css('display', 'none');
    });
})
list.click(function () {
    currentItem = $(this);
    let currentText = $(this).text();
    oldText.text(currentText)
    edit.css('display', 'flex');
    $('#inputVal').keyup(function () {
        inputVal = $("#inputVal").val();
    });
    saveBtn.click(function () {
        currentItem.text(inputVal);
        $("#inputVal").val('');
        edit.css('display', 'none');
    });
})
closeBtn.click(function () {
    edit.css('display', 'none');
})