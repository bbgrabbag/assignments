var add = $('#add');
var input = $("#input");
var groceryList = $('#grocery-list');
add.click(function () {
    function prependItem() {
        groceryList.prepend(`<li><button class = "button text-center">X</button> ${input.val()}</li>`);
    }
    prependItem();
    input.val("");
    var remove = $("li .button");
    remove.click(function () {
        $(this).parent().remove();
    });

    var clearAll = $("#clear-all");
    clearAll.click(function () {
        $("li").remove();
    });
});