var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description') // Corrected the selector
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "9e42e97842c5531f7b0ac8b36558e477"

function conversion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var vardescrip = data['weather'][0]['description'] // Corrected the variable name
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${conversion(tempature)} C</span>` // Corrected the function name
            descrip.innerHTML = `Sky conditions: <span>${vardescrip}</span>` // Corrected the variable name
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`
        })
        .catch(err => alert('You entered the wrong city name'))
})
