const APIKey = `cf406ce13c9549186e012b2fa5214f5d`

const loadTemparecar = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = (tempData) => {
    console.log(tempData)
    const getTemperatureValue = document.getElementById('weatherTemp')
    getTemperatureValue.innerText = `${tempData.main.temp}`

    const tempStatus = document.getElementById('status')
    tempStatus.innerText = `${tempData.weather[0].main}`


}

document.getElementById('searchBtn').addEventListener('click', () => {
    const getSearchInput = document.getElementById('searchInput')
    const searchValue = getSearchInput.value;

    const cityName = document.getElementById('cityName')
    cityName.innerText = searchValue

    loadTemparecar(searchValue)
})




loadTemparecar('dhaka')

