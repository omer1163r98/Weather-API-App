const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching the weather data: ", error);
    throw error;
  }
};
