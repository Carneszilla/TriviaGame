$(document).ready(function() {
var scoreCorrect = 0;

    $('.question').fadeOut('fast');
    $('.result').fadeOut('fast');

    $('#play').click(function() {
       $(this).fadeOut('fast');
       $('#questionOne').fadeIn('slow');
   });

    $('#submitOne').click(function() {
        var inputOne = $('#answerOne').val();
        console.log(inputOne); // inoutOne is connected to answer one in the index.html doc
        if (inputOne.toLowerCase() === "Doomsday") {
            // fadeOut was read in JS and jQuwe
            $('#questionOne').fadeOut('fast'),
            $('#correct').fadeIn('fast'),
            $('#questionTwo').fadeIn('slow'),
            scoreCorrect += 1,
            console.log(scoreCorrect);
        } else {
            $('#questionOne').fadeOut('fast'),
            $('#sorry').fadeIn('slow'),
            $('#questionTwo').fadeIn('slow');
            };
    });

    $('#submitTwo').click(function() {
        var inputTwo = $('#answerTwo').val();
        console.log(inputTwo);
        if (inputTwo.toLowerCase() === "Bruce Wayne") {
            $('#questionTwo').fadeOut('fast'),
            $('#sorry').fadeOut('fast'),
            $('#correct').fadeIn('slow'),
            scoreCorrect += 1,
            console.log(scoreCorrect);
        } else {
            $('#questionTwo').fadeOut('fast'),
            $('#correct').fadeOut('fast'),
            $('#sorry').fadeIn('slow'),
            $('#score').fadeIn('slow'),
            $('#score').append("<p>You answered " + scoreCorrect +" question correctly out of 2.</p>");
            };
    });

});