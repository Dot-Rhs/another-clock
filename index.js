window.onload = function() {
  var seconds = document.getElementById("seconds");
  var minutes = document.getElementById("minutes");
  var hours = document.getElementById("hours");

  function startIt() {
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    var hour = date.getHours();
    console.log(
      "it is this hour: " +
        hour +
        " and this minute: " +
        minute +
        " and this second:" +
        second
    );

    var secDeg = (second * 360) / 60;
    var minDeg = (minute * 360) / 60 + (second * 360) / 60 / 60;

    seconds.style.transform = "rotate(" + secDeg + "deg)";
    minutes.style.transform = "rotate(" + minDeg + "deg)";
  }

  setInterval(startIt, 1000);
};
