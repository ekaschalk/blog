$( document ).ready(function() {
    $(document.body).find("pre code").each(function() {
        $(this).html($.trim($(this).html()));
    });
});
