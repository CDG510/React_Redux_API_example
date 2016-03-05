//middlware lets action pass, manipulates, logs or stops, middlemen/control fate of reducers
import axios from 'axios'


const API_KEY = 'c2af202ec0ae511e1dfc2f271529f969'
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?`;
export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city) {
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    console.log("DIS MY SEND", url)
    const request = axios.get(url)


    console.log("Requst:",  request)

    //payload waits for promise to resolve. if has promise, let it go through
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
