const body = document.querySelector("body");
const inputBox = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const cardImage = document.querySelector(".cardImage");
const dates = document.querySelector(".dates");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const weatherType = document.querySelector(".weatherType");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const humidityy = document.querySelector(".humidityy");
const pressuree = document.querySelector(".pressuree");

addBtn.onclick = () => {
    const API_KEY = "35ab8abbb8ad8b9d867c040a0b364af5"; 
    let userData = inputBox.value; 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userData + '&appid=' + API_KEY + '')

    .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);

            const date = new Date();
            dates.innerHTML = date.toDateString();

            let nameOfCity = data['name'];
            cityName.innerHTML = nameOfCity;

            let tempValue = data['main']['temp'];
            tempValue -= 273;
            temp.innerHTML = Math.floor(tempValue) + '&#176;<span class="celsius">C</span>';

            let typeOfWeather = data['weather'][0]['main'];
            weatherType.innerHTML = typeOfWeather;
            if (typeOfWeather == "Mist" || typeOfWeather == "Fog") {
                cardImage.style.backgroundImage = "url('https://www.freepik.com/premium-vector/clouds-blue-sky-background-realistic_14325232.htm#page=1&query=mist%20weather&position=31')";
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1615567123837-6ca3e50e5a99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdCUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
            } else if (typeOfWeather == "Clouds") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1536251062688-0185b521f349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
            } else if (typeOfWeather == "Clear") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1567787782997-319ae6cf2edc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsZWFyJTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                body.style.backgroundImage = "url('https://image.freepik.com/free-photo/blue-sky-with-puffy-white-clouds_1385-12.jpg')";
            } else if (typeOfWeather == "Snow") {
                cardImage.style.backgroundImage = "url('https://image.freepik.com/free-vector/unfocused-winter-landscape-with-snowflakes_1393-210.jpg')";
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581059505951-79810a77fb12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";;
            } else if (typeOfWeather == "Dizzle" || typeOfWeather == "Sand") {
                cardImage.style.backgroundImage = "url('https://www.freepik.com/free-vector/beach-texture-with-golden-sandy-waves_11685036.htm#page=1&query=sand&position=11')";
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
            } else if (typeOfWeather == "Thunderstorm" || typeOfWeather == "Tornado") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1561485132-59468cd0b553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                body.style.backgroundImage = "url('https://image.freepik.com/free-vector/lightning-strikes-thundercloud-electric-discharge-storm-cloud-impact-place-magical-energy-flash_107791-3382.jpg')";
            } else if (typeOfWeather == "Haze" || typeOfWeather == "Smoke") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1547584320-ec516fa311a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21va2V5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1547584320-ec516fa311a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21va2V5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
            } else if (typeOfWeather == "Rain") {
                cardImage.style.backgroundImage = "url('https://i.pinimg.com/originals/b9/b2/69/b9b2692358c01f85d275df7049bf08fa.jpg')";
                cardImage.style.backgroundImage = "url('https://i.pinimg.com/originals/b9/b2/69/b9b2692358c01f85d275df7049bf08fa.jpg')";

            }
            let minTemperature = data['main']['temp_min'];
            minTemperature -= 273;
            minTemp.innerHTML = Math.floor(minTemperature) + '&#176;C(Min Temp)';

            let maxTemperature = data['main']['temp_max'];
            maxTemperature -= 273;
            maxTemp.innerHTML = Math.floor(maxTemperature) + '&#176;C(Max Temp)';

            let humidity = data['main']['humidity'];
            humidityy.innerHTML = humidity + '%(Humidity)';

            let pressure = data['main']['pressure'];
            pressuree.innerHTML = pressure + 'mb(Pressure)';

            inputBox.value = "";
        })
        .catch((err) => {
            console.log(err);
        });
}