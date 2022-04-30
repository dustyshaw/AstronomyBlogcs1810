let locationurl = `https://api.weather.gov/points/{39.7456},-97.0892`;
fetch(locationurl)
.then(response => response.json())
.then (data => {
    let hourlyForcastURL = data.properties.forecastHourly;
    
    fetch(hourlyForcastURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // let forcast = data.properties.periods[0].shortForecast;
        
        // let weather = document.getElementById("HourByHour");
        //
        // weather.innerHTML=`<p>${forcast}<p>`;
    });
})