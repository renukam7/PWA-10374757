$(document).ready(function(){
  var n = localStorage.getItem("mTitle");
  var time = localStorage.getItem("mTime");
  var day = localStorage.getItem("mDay");
  var imgId = localStorage.getItem("image");
  var dataURL = 'https://college-movies.herokuapp.com/';
  $('#bookingTitle').text(n);
  $("#bookingTime").text(time);
  $("#bookingDay").text(day);
  var images= '<img class="job-item section-before background-image" src="/Trail/images/'+(parseInt(imageId)+1)+'.jpg"></image>';
  $('#backgroung-image').append(images);
});
var MovieDay, MovieTime;

function onBodyLoad() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var todaysDay = days[today.getDay()];

    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var movieName = hashes[0];
    var daySelected = hashes[1];
    var timeSelected = hashes[2];
    var mid = hashes[3];

    MovieDay = daySelected;
    MovieTime = timeSelected;
    movieName = movieName.replace(/%20/g, " ");
    console.log(movieName + ' ' + daySelected);

    $('.tr-breadcrumb').css("background-image", "url(images/" + mid + ".jpg)");
    
    $('#mDay').html(daySelected);
    $('#mTime').html(timeSelected);

    getMovieDetails(movieName, daySelected, timeSelected);

    //$('#selectday').on('change', function (e) {
    //    var optionSelected = $("option:selected", this);
    //    var valueSelected = this.value;

    //    getShowTimes(movieName, valueSelected);

    //});
    
    
}

function getMovieDetails(movie, dayOfWeek, timeSelected) {
    var url = '[{"title":"Geostorm","year":2016,"director":"Dean Devlin","cast":"Gerard Butler, Andy Garcia, Ed Harris, Katheryn Winnick","genre":"Action","notes":"Warner Bros.","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"The Jungle Book","year":2016,"director":"Jon Favreau","cast":"Bill Murray, Ben Kingsley, Idris Elba","genre":"Adventure","notes":"Walt Disney Pictures, Based on the story of the same name by Rudyard Kipling","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Dirty Grandpa","year":2016,"director":"Dan Mazer","cast":"Zac Efron, Robert De Niro, Zoey Deutch, Aubrey Plaza","genre":"Comedy","notes":"Lions Gate Entertainment","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Angry Birds","year":2016,"director":"Clay Kaytis","cast":"Jason Sudeikis, Josh Gad, Bill Hader, Peter Dinklage","genre":"Animation, Action","notes":"Columbia Pictures, Based on the video game of the same name","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Finding Dory","year":2016,"director":"Andrew Stanton","cast":"Ellen DeGeneres, Albert Brooks, Diane Keaton, Eugene Levy","genre":"Animation, Adventure","notes":"Walt Disney Pictures, Sequel to Finding Nemo (2003)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Alice in Wonderland: Through the Looking Glass","year":2016,"director":"James Bobin","cast":"Mia Wasikowska, Johnny Depp, Helena Bonham Carter, Anne Hathaway","genre":"Fantasy","notes":"Walt Disney Pictures, Based on the novel Through the Looking- Glass(1971) by Lewis Carroll, Sequel to Alice in Wonderland(2010)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Batman v Superman: Dawn of Justice","year":2016,"director":"Zack Snyder","cast":"Henry Cavill, Ben Affleck, Gal Gadot, Amy Adams","genre":"Action","notes":"Warner Bros., Sequel to Man of Steel (2013)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Kung Fu Panda 3","year":2016,"director":"Jennifer Yuh Nelson","cast":"Jack Black, Angelina Jolie, Dustin Hoffman, Seth Rogen","genre":"Animation, Comedy","notes":"20th Century Fox, Sequel to Kung Fu Panda 2 (2011)","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"the Free State of Jones","year":2016,"director":"Gary Ross","cast":"Matthew McConaughey, Gugu Mbatha- Raw, Keri Russell, Sean Bridgers","genre":"Thriller","notes":"STX Entertainment","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}},{"title":"Zootopia","year":2016,"director":"Byron Howard","cast":"Jason Bateman","genre":"Animation, Adventure","notes":"Walt Disney Pictures","runningTimes":{"mon":["12:00","14:30","16:50","18:40"],"tue":["14:45","18:35","21:45"],"wed":["18:35","20:55","23:45"],"thu":["09:15","13:15","16:55","19:10"],"fri":["14:3","16:50","19:10"],"sat":["16:50","19:10"],"sun":["09:15","11:15","12:00","14:30","16:50","18:40"]}}]';

    //var movieData = response.slice(0, 10);
    var movieData = JSON.parse(url);
    console.log(movieData);
    var divString = '';
    var shortDay = dayOfWeek.substring(0, 3).toLowerCase();

    for (var i = 0; i < movieData.length; i++) {


        if (movieData[i]['title'].toLowerCase() == movie.toLowerCase()) {

            var movieTitle = movieData[i]['title'];
            var movieYear = movieData[i]['year'];
            var movieDiretctor = movieData[i]['director'];
            var movieCast = movieData[i]['cast'];
            var movieGenre = movieData[i]['genre'];
            var movieNotes = movieData[i]['notes'];

            $('#movieName').html(movieTitle);
            $('#movieYear').html(movieYear);
            $('#movieDirector').html(movieDiretctor);
            $('#movieCast').html(movieCast);
            $('#movieGenre').html(movieGenre);
            $('#movieNotes').html(movieNotes);
            
            break;

        }
        
    }
    //var url = 'https://college-movies.herokuapp.com';
    //$.ajax({
    //    dataType: "json",
    //    url: url,
    //    success: function (response) {

    //        var movieData = response.slice(0, 10);
    //        console.log(movieData);
    //        var divString = '';
    //        var shortDay = dayOfWeek.substring(0, 3).toLowerCase();

    //        for (var i = 0; i < movieData.length; i++) {


    //            if (movieData[i]['title'].toLowerCase() == movie.toLowerCase()) {

    //                var movieTitle = movieData[i]['title'];
    //                var movieYear = movieData[i]['year'];
    //                var movieDiretctor = movieData[i]['director'];
    //                var movieCast = movieData[i]['cast'];
    //                var movieGenre = movieData[i]['genre'];
    //                var movieNotes = movieData[i]['notes'];

    //                $('#movieName').html(movieTitle);
    //                $('#movieYear').html(movieYear);
    //                $('#movieDirector').html(movieDiretctor);
    //                $('#movieCast').html(movieCast);
    //                $('#movieGenre').html(movieGenre);
    //                $('#movieNotes').html(movieNotes);

    //                //select = document.getElementById('SelectTime');

    //                //for (var j = 0; j < movieData[i]['runningTimes'][shortDay].length; j++) {

    //                //    var showtime = movieData[i]['runningTimes'][shortDay][j];
    //                //    var opt = document.createElement('option');
    //                //    opt.value = showtime;
    //                //    opt.innerHTML = showtime;
    //                //    select.appendChild(opt);
    //                //}
    //                //$('#selectday').val(shortDay);
    //                //if (timeSelected != null && timeSelected != "" && timeSelected != "movieTime") {
    //                //    $('#SelectTime').val(timeSelected);
    //                //}


    //                break;

    //            }



    //        }

    //    }

    //});
}

function getShowTimes(movie, dayOfWeek) {
    var url = 'https://college-movies.herokuapp.com';
    $.ajax({
        dataType: "json",
        url: url,
        success: function (response) {

            var movieData = response.slice(0, 10);
            console.log(movieData);
            var divString = '';
            var shortDay = dayOfWeek.substring(0, 3).toLowerCase();

            for (var i = 0; i < movieData.length; i++) {


                if (movieData[i]['title'].toLowerCase() == movie.toLowerCase()) {

                    select = document.getElementById('SelectTime');
                    select.innerHTML = "";

                    for (var j = 0; j < movieData[i]['runningTimes'][shortDay].length; j++) {

                        var showtime = movieData[i]['runningTimes'][shortDay][j];
                        var opt = document.createElement('option');
                        opt.value = showtime;
                        opt.innerHTML = showtime;
                        select.appendChild(opt);
                    }

                    break;

                }



            }

        }

    });
}

function bookTickets() {
    
    var movieName = $('#movieName').text();
    //var daySelected = $('#selectday').find(":selected").text();
    //var movieTime = $('#SelectTime').val();
    var combo = $('#selectCombo').val();

    if (combo == 0) {
        alert("Please select combo");
        return false;
    }
   
    //var movieTime = obj.innerHTML;
    window.location.href = "Renuka10374757book-tickets.html?" + movieName + '&' + MovieDay + '&' + MovieTime + '&' + combo;
    
}


