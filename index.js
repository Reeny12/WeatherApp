const apiKey = "de32e8201f70534ade522755821aaf8d";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{

                var data = await response.json()

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            else if (data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            }

            


        }

        searchBtn.addEventListener("click", ()=>{

            checkWeather(searchBox.value);

        })

        searchBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                checkWeather(searchBox.value);
            }
        });




        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTimeString = `${hours}  :  ${minutes}  :  ${seconds}`;
            document.getElementById('currentTime').textContent = currentTimeString;
        }
        
        // Update the current time every second
        setInterval(updateTime, 1000);
        
        // Call updateTime initially to display the current time immediately
        updateTime();
        

        // Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Format the date as desired
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Update the HTML element with the current date
    document.getElementById("current-date").innerText = formattedDate;
});