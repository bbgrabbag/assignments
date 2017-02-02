$(document).ready(function load() {
    var koopaPricing = 5;
    var goombaPricing = 4;
    var booPricing = 7;

    $("#koopa-pricing").text(koopaPricing);
    $("#goomba-pricing").text(goombaPricing);
    $("#boo-pricing").text(booPricing);

    function total() {

        var koopaCaught = Number($("#koopa-total-caught").val());
        $("#koopa-individual-total").text(koopaCaught * koopaPricing);
        var koopaSubTotal = Number($("#koopa-individual-total").text());

        var goombaCaught = Number($("#goomba-total-caught").val());
        $("#goomba-individual-total").text(goombaCaught * goombaPricing);
        var goombaSubTotal = Number($("#goomba-individual-total").text());

        var booCaught = Number($("#boo-total-caught").val());
        $("#boo-individual-total").text(booCaught * booPricing);
        var booSubTotal = Number($("#boo-individual-total").text());

        $("#total-price").text(koopaSubTotal + goombaSubTotal + booSubTotal);

        function ping() {
            var sound = $("audio")[0];
            sound.play();
        }
        ping();

    }

    $("#koopa-total-caught").change(total);

    $("#goomba-total-caught").change(total);

    $("#boo-total-caught").change(total);


});

$("#night-lite").click(
    function () {
        if ($("button").text() === "Night Mode") {

            $("body").css("background-image", "url(nightbackground.jpg)");
            $("button").text("Day Mode");
            $("header").css("color","white");
        } else {
            $("body").css("background-image", "url(background.jpg)");
            $("button").text("Night Mode");
            $("header").css("color", "black");
        }
    }
);