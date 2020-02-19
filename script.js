// template jQuery: $(selector).action()
/*
$(this).hide() hides the current element
$("p").hide() hides all <p> alements
$(".test").hide() hides all elements with class="test"
$("#test").hide() hides elements with id="test"
*/

// $(document).ready(function(){
// jQuery methods go here
// });

// $(selector).hide(speed,callback);
$(document).ready(function() {
    $("button").click(function() {
        $("p").hide();
    });
});

// ID selector
$(document).ready(function() {
    $("#test").css("color", "green");
});

// class selector
$(document).ready(function() {
    $(".test").css("font-size", "14px");
});

// .$(document).read() method allows us to execute a function when the document is fully loaded
// click on the paragraph itself to make it disapear
$("p").dblclick(function() {
    $(this).hide();
});

$("#test").mouseenter(function() {
    alert("You entered the green text block");
});

// changing colors with the mouse pointer
$(".test2").on({
    mouseenter: function() {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
        $(this).css("background-color", "lightblue");
    },
    click: function() {
        $(this).css("background-color", "yellow");
    }
});

// toggle to hide or reveal
$(document).ready(function() {
    $(".testtoggle").click(function() {
        $(".test").toggle();
    });
});

// slide open and close a box
$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

// Animations $(selector).animate({params},speed,callback);
$(document).ready(function() {
    $("#hello").click(function() {
        var div = $("#hello");
        div.animate({ left: '100px' }, "fast");
        div.animate({ fontSize: '4em' }, "slow");
    })
})

// callback function: $(selector).hide(speed,callback);
// callback makes sure that effect will work properly

// chaining
$(document).ready(function() {
    $("#chaining").css("background-color", "green")
        .css("border-radius", "50%")
        .css("color", "white")
});