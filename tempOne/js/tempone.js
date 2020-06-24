$(document).ready(function () {
    $('.slick').slick({
        autoplay: true,
    })
});

// editing template 
 
let heading = $('h3');
let pargrph = $('p');
let headingSmall = $('h5');
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

headingSmall.click(function () {
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

pargrph.click(function () {
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

