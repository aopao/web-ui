$(function () {
    if(window.sessionStorage.getItem("skin")) {
        $("body").addClass(window.sessionStorage.getItem("skin"));
    } else {
        $("body").addClass('green');
    }
});


