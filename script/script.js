// CREATE NAME SPACE
const weedApp = {};

// CREATE VARIABLES
weedApp.init = function(){ 
    weedApp.submitClick();
}

// CREATE KEYS FOR URL AND APIKEY 
weedApp.apiKey = 'u3jgDMY';

// CREATE FUNCTION FOR AJAX CALL
const raceArray = weedApp.getRace = (userInput) => {
    $.ajax({
        url: `https://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/race/${userInput}` ,
        method: 'GET',
        datatype: 'json'
    }).then((res) => {
        // CALLING RANDOM STRAIN FUNCTION
        let singleRace = (res[Math.floor(Math.random() * res.length)]);

        // CALLING RESULTS FUNCTION
        $(".userResultsContainer").append(`<h2 class="userResultTitle">Try this!</h2>`)
        $(".userResultsContainer").append(`<img src="images/${userInput}.jpg">`);
        $(".userResultsContainer").append(`<p class="apiName"><span class="resultSpan">Strain:</span> ${singleRace.name}</p>`);
        $(".userResultsContainer").append(`<p class="apiRace"><span class="resultSpan">Race: </span> ${singleRace.race}</p>`);
       
    } 
)};

weedApp.submitClick = function () {
    $('.moodForm').submit(function (event) {
        event.preventDefault();
        console.log('clicked!');

        const race = $("input[name=race]:checked").val();

        $('html, body').animate({
            scrollTop: $('.moodFormContainer').offset().top + $('.moodFormContainer').height()
        }, 400);

        if ($("input[name=race]:checked").length) {
            $('input[type=submit]', this).attr('disabled', 'disabled');
            animatedResults();
        } else if (!$("input[name=race]:checked").length) {
            alert(`Are you already HIGH?? Please select one option before submitting!`);
            $('input[type=submit]', this).attr('', '');
        };

        weedApp.getRace(race);

    });
};

animatedResults = function(){
    $('.resultContainer').css('opacity', '1').css('display', 'flex');
}

$(document).ready(function(){
    weedApp.init();
});                              
