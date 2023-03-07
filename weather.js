// Determine the constants of the id fucntions
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

// convert kelvin to celcius. 1 kelvin = -272.15 celcius

function conversion(val){
    return (val - 273).toFixed(2)
}

// I collected all the information with the help of fetch method

btn.addEventListener('click', function(){
    // API link where all the weather information will be collected

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
.then(res => res.json())

    .then(data => {

        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspd = data['wind']['speed']

        city.innerHTML = `Weather of ${nameval}`
        temp.innerHTML = `Temperature: ${ conversion(temperature)}C`
        description.innerHTML = `Sky Conditions: ${descrip}`
        wind.innerHTML = `Wind Speed: ${wndspd} km/h`
    })
    .catch(err => alert('You entered Wrong city name'))
})