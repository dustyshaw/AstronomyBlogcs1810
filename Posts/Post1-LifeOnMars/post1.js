let NASA_api = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;
fetch(NASA_api)
.then(response => response.json())
.then (data => {
    // let MarsAverageTemp = ;
    console.log(MarsAverageTemp);
    // fetch(hourlyForcastURL)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
        // let forcast = data.properties.periods[0].shortForecast;
        
        // let weather = document.getElementById("HourByHour");
        //
        // weather.innerHTML=`<p>${forcast}<p>`;
    });
