/* jQuery and JavaScript code here for lab6-1.html */
$('#pageTitle').text("Lab 6 - DOM Manipulation with jQuery");
$('#msgArea').text("My class is " + $('#msgArea').attr('class'));
$('.btn').css('background-color', 'red');
$('body').css('background-color', 'ivory');
$('.center-icons').addClass('selected');
$(document).ready(function() {
    $('.panel')
    .on('click', function() {
        $('#message').html("You clicked in the panel!");
    })
    .on('mousemove', function(e) {
        $('#message').html("x= " + e.pageX + ' y= ' + e.pageY);
    })
    .on('mouseleave', function() {
        $('#message').html("The mouse has left");
    })
});

var link = $('<img src="images/art/thumbs/13030.jpg">');
$('#panel-2').append(link);

function enlarge() {
    var	alt	=	$(this).attr('alt');
    var	src	=	$(this).attr('src');								
    var	newsrc	=	src.replace("small","medium");
    var	preview	=	$('<div	id="preview"></div>');
    var	image	=	$('<img	src="'	+	newsrc	+	'">');
    var	caption	=	$('<p>'	+	alt	+	'</p>');

    image.appendTo(preview);
    caption.appendTo(preview);

    $(this).after(preview);
    $('#preview').show();

    $(this).addClass('gray');
    $(this).fadeIn(1000);
}

function removePreview() {
    $(this).removeClass('gray');
    var preview = $('#preview');
    preview.remove();
}

$(document).ready(function() {
    $('#stories img').hover(enlarge, removePreview);
});
