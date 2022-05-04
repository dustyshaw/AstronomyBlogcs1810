window.addEventListener('load', init);

function init() {
    let url = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        window.apiData = data;
        console.log(data);
        console.log(data[675].AT.av);

        let replaceText = document.getElementById('MarsAPI');
        replaceText.innerHTML = ("Sol 675: " + data[675].AT.av);
    });
}

