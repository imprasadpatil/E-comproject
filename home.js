
//Light Dark Mode function
const changemode = () => {
    let mybody = document.body;
    //let whratherdark = document.getElementById()
    mybody.classList.toggle('darkmode')

}

//loadcupon function
function loadcupon() {
    document.getElementById('cupon').style.display = "block";
    document.getElementById('carousel').style.opacity = "0.5";
}

//close cupon function
const closecupon = () => {
    document.getElementById('cupon').style.display = "none";
    document.getElementById('carousel').style.opacity = "1";
}
// window.onload = loadcupon()

//GeoLocation Function
function geolocation() {
    let errormsg = document.getElementById('message');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        errormsg.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {

    let message = document.getElementById('message');
    let cityname = document.getElementById('cityname');
    let citytemp = document.getElementById('citytemp');

    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    // message.innerText = `Lat is ${lat} & long is ${long}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;                //api calling
    fetch(url, { method: 'GET' })
        //return promise

        .then((res) => res.json())
        // resolve the promise
        .then((data) => {
            message.innerText = "City Wheather"
            cityname.innerText = ` City - ${data.city.name}`
            citytemp.innerText = `Temp - ${data.list[0].temp.day} °C`
        })
}
