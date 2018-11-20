
var $pager = $("#blog-pager"),
    $posts = $(".blog-posts");
$pager["find"]("#blog-pager-newer-link")["remove"]();
$pager["on"]("click", "#blog-pager-older-link a", function() {
    $["get"](this["href"], {}, function(variable_0) {
        var variable_1 = $(variable_0)["find"](".post")["length"] ? $(variable_0) : $("<div></div>");
        $posts["append"](variable_1["find"](".blog-posts")["html"]());
        $pager["html"](variable_1["find"]("#blog-pager-older-link")["clone"]())
    }, "html");
    $(this)["replaceWith"]("<span class=\"muatlagi-proses\">Sabar Cok!!!</span>");
    return false
})
