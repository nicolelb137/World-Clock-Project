function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/Denver");

  denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
  denverTimeElement.innerHTML = denverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
