var MovieTitle, MovieDay, MovieTime, MovieCombo;

function Pageload() {
    //alert("a");
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var movieName = hashes[0];
    var daySelected = hashes[1];
    var timeSelected = hashes[2];
    var combo = hashes[3];

    MovieTitle = movieName;
    MovieDay = daySelected;
    MovieTime = timeSelected;
    MovieCombo = combo;

    movieName = movieName.replace(/%20/g, " ");

    $('#mTitle').html(movieName);
    $('#mDayTime').html(daySelected+", "+timeSelected + " Show");
    
    $('#selectNoOfTickets').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

        $('#totalPrice').html((valueSelected * MovieCombo)+"€");

    });

}