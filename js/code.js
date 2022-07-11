var btn = $(".header__burger");
var menu = $(".header__menu");

$(document).ready(function() {
    btn.bind("click", function() {
        menu.toggleClass("_active");
        btn.toggleClass("_active");
        $("body").toggleClass("_lock");
    })
});

var keyword = $('.search__keyword');

keyword.bind("click", function(event) {
    $('#searchInput').val(keyword.html ());
    $('.search__keywords'). hide();
});

$('#searchInput').bind("change", function () {
    if(!$('#searchInput').val()) {
        $('.search__keywords'). slideDown();
    }
});

$('.search__icon').bind("click", function() {
    $('.search__keywords').show();
    $('#searchInput').val("");
})

