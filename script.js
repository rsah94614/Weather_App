APIKYE = 'e22a3135396249ce88e120904240105';


// API = http://api.weatherapi.com/v1/current.json?key=e22a3135396249ce88e120904240105&q=London&aqi=yes

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');


// referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')



async function getData(KYE, cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KYE}&q=${cityName}&aqi=yes`);
    return await promise.json();
}

searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData( APIKYE,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;
    

})

