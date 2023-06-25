const API_URL ='https://api.openweathermap.org/data/2.5/';
const API_KEY ='c061dcc4cebb561a455676323080c4de';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if(!response.ok) {
            throw new Error("Ошибка запроса")
        }

        const data = await response.json();

        console.log('data: ', data.wind.deg);

        
        return { success : true, data }
    } catch (error) {
        return { success : false, data }
    }
    

}