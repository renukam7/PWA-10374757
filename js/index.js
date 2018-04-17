
var todaysDay;
var daySelected;

function Pageload() {

    $('.loader-div').show();
    $('#MoviesRow').html('');

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var today = new Date();
    var dayOfWeek = days[today.getDay()];
    todaysDay = dayOfWeek;
    var day1, day2, day3, day4, day5, day6, day7;
    for (var i = 0; i < 7; i++) {
        if (i != 0)
            today.setDate(today.getDate() + 1);
        day = days[today.getDay()];
        dayNum = today.getDate();
        dayNum = ("0" + dayNum).slice(-2);
        console.log(dayNum + ' ' + day);
        if (i == 0) {
            var dayString = dayNum + "<br><span>Today</span>";
        } else {
            var dayString = dayNum + "<br><span>" + day.substring(0, 3) + "</span>";
        }

        console.log(dayString);
        $('#date_day' + (i + 1)).append(dayString);

    }
    getMoviesAjax(dayOfWeek);


}

function getMoviesAjax(dayOfWeek) {
    //var url = 'https://college-movies.herokuapp.com';
    //var url = 'movie.json';
    var url = '[{"title":"Geostorm","year":2016,"director":"Dean Devlin","cast":"Gerard Butler, Andy Garcia, Ed Harris, Katheryn Winnick","genre":"Action","notes":"Warner Bros.","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"The Jungle Book","year":2016,"director":"Jon Favreau","cast":"Bill Murray, Ben Kingsley, Idris Elba","genre":"Adventure","notes":"Walt Disney Pictures, Based on the story of the same name by Rudyard Kipling","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Dirty Grandpa","year":2016,"director":"Dan Mazer","cast":"Zac Efron, Robert De Niro, Zoey Deutch, Aubrey Plaza","genre":"Comedy","notes":"Lions Gate Entertainment","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Angry Birds","year":2016,"director":"Clay Kaytis","cast":"Jason Sudeikis, Josh Gad, Bill Hader, Peter Dinklage","genre":"Animation, Action","notes":"Columbia Pictures, Based on the video game of the same name","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Finding Dory","year":2016,"director":"Andrew Stanton","cast":"Ellen DeGeneres, Albert Brooks, Diane Keaton, Eugene Levy","genre":"Animation, Adventure","notes":"Walt Disney Pictures, Sequel to Finding Nemo (2003)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Alice in Wonderland: Through the Looking Glass","year":2016,"director":"James Bobin","cast":"Mia Wasikowska, Johnny Depp, Helena Bonham Carter, Anne Hathaway","genre":"Fantasy","notes":"Walt Disney Pictures, Based on the novel Through the Looking- Glass(1971) by Lewis Carroll, Sequel to Alice in Wonderland(2010)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Batman v Superman: Dawn of Justice","year":2016,"director":"Zack Snyder","cast":"Henry Cavill, Ben Affleck, Gal Gadot, Amy Adams","genre":"Action","notes":"Warner Bros., Sequel to Man of Steel (2013)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Kung Fu Panda 3","year":2016,"director":"Jennifer Yuh Nelson","cast":"Jack Black, Angelina Jolie, Dustin Hoffman, Seth Rogen","genre":"Animation, Comedy","notes":"20th Century Fox, Sequel to Kung Fu Panda 2 (2011)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"the Free State of Jones","year":2016,"director":"Gary Ross","cast":"Matthew McConaughey, Gugu Mbatha- Raw, Keri Russell, Sean Bridgers","genre":"Thriller","notes":"STX Entertainment","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Zootopia","year":2016,"director":"Byron Howard","cast":"Jason Bateman","genre":"Animation, Adventure","notes":"Walt Disney Pictures","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}}]';

    //var movieData = response.slice(0, 10);
    var movieData = JSON.parse(url);
    console.log(movieData);


    var divString = '';
    var shortDay = dayOfWeek.substring(0, 3).toLowerCase();
    daySelected = shortDay;
    for (var i = 0; i < movieData.length; i++) {

        divString += '<div class="col-sm-6 col-md-3">';
        divString += '<div class="job-item section-before bg-image" style="background-image: url(images/' + (i + 1) + '.jpg);">';
        divString += '<div class="job-info">';
        divString += '<span class="tr-title">';
        var movieTitle = movieData[i]['title'];
        divString += '<a onclick="openMovie(this);" style="cursor:pointer;" mid="' + (i + 1) + '">' + movieTitle + '</a>';
        divString += '<span><a href="#">' + movieData[i]['year'] + '</a></span>';
        divString += '</span>';
        divString += '<div class="row">';
        for (var j = 0; j < movieData[i]['runningTimes'][shortDay].length; j++) {
            divString += '<div class="col-sm-8 col-md-4" style="margin-bottom: 15px;">';
            var runningTime = movieData[i]['runningTimes'][shortDay][j];
            if (runningTime == "14:3") {
                runningTime = "14:03";
            }
            divString += '<span class="m-time-item"><a class="showtimes" onclick="openMoviebytime(this);" style="cursor:pointer;" mName="' + movieTitle + '" mid="' + (i + 1) + '">' + runningTime + '</a></span>';

            divString += '</div>';
        }
        divString += '</div>';
        divString += '</div>';
        divString += '</div>';
        divString += '</div>';
    }


    $('#MoviesRow').append(divString);
    $('.loader-div').hide();


    //$.ajax({
    //    dataType: "json",
    //    url: url,
    //    success: function (response) {

    //        var movieData = response.slice(0, 10);
    //        console.log(movieData);


    //        var divString = '';
    //        var shortDay = dayOfWeek.substring(0, 3).toLowerCase();
    //        daySelected = shortDay;
    //        for (var i = 0; i < movieData.length; i++) {

    //            divString += '<div class="col-sm-6 col-md-3">';
    //            divString += '<div class="job-item section-before bg-image" style="background-image: url(images/'+ (i+1) +'.jpg);">';
    //            divString += '<div class="job-info">';
    //            divString += '<span class="tr-title">';
    //            var movieTitle = movieData[i]['title'];
    //            divString += '<a onclick="openMovie(this);" style="cursor:pointer;" mid="'+ (i+1) +'">' + movieTitle + '</a>';
    //            divString += '<span><a href="#">' + movieData[i]['year'] + '</a></span>';
    //            divString += '</span>';
    //            divString += '<div class="row">';
    //            for (var j = 0; j < movieData[i]['runningTimes'][shortDay].length; j++) {
    //                divString += '<div class="col-sm-8 col-md-4" style="margin-bottom: 15px;">';
    //                var runningTime = movieData[i]['runningTimes'][shortDay][j];
    //                if (runningTime == "14:3") {
    //                    runningTime = "14:03";
    //                }
    //                divString += '<span class="m-time-item"><a class="showtimes" onclick="openMoviebytime(this);" style="cursor:pointer;" mName="' + movieTitle + '" mid="' + (i + 1) +'">' + runningTime + '</a></span>';

    //                divString += '</div>';
    //            }
    //            divString += '</div>';
    //            divString += '</div>';
    //            divString += '</div>';
    //            divString += '</div>';
    //        }


    //        $('#MoviesRow').append(divString);
    //        $('.loader-div').hide();

    //    },
    //    failure: function () {
    //        console.log("failure");
    //    },

    //    error: function () {
    //        console.log("error");
    //    }

    //});

}

function getMovies(obj) {

    $('._active').removeClass('_active');
    obj.parentElement.classList.add('_active');

    var daySelected = obj.children[1].children[1].innerText.toLowerCase();

    if (daySelected == 'today') {
        daySelected = todaysDay.toLowerCase().substring(0, 3);
    } else {
        daySelected = daySelected.substring(0, 3)
    }
    $('#MoviesRow').html('');
    $('.loader-div').show();
    getMoviesAjax(daySelected);
}

function openMovie(obj) {
    //var movieName = obj.innerHTML;
    //var mid = obj.getAttribute('mid');
    //window.location.href = "movie-details.html?" + movieName + '&' + daySelected + '&' + 'movieTime' + '&' + mid;
}
function openMoviebytime(obj) {
    var movieName = obj.getAttribute('mname');
    var mid = obj.getAttribute('mid');
    var movieTime = obj.innerHTML;

    switch (daySelected) {
        case 'mon':
            daySelected ="Monday"
            break;
        case 'tue':
            daySelected = "Tuesday"
            break;
        case 'wed':
            daySelected = "Wednesday"
            break;
        case 'thu':
            daySelected = "Thursday"
            break;
        case 'fri':
            daySelected = "Friday"
            break;
        case 'sat':
            daySelected = "Saturday"
            break;
        case 'sun':
            daySelected = "Sunday"
            break;
    }

    window.location.href = "Renuka10374757movie-details.html?" + movieName + '&' + daySelected + '&' + movieTime + '&' + mid;
}
