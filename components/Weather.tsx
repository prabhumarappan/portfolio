import { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Weather() {
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [location, setLocation] = useState<{
        lat: number;
        lon: number;
    } | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            });
        }
    }, []);

    // TODO: Uncomment this when deploying
    useEffect(() => {
        if (location) {
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location.lat},${location.lon}&aqi=no`;

            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherData(data);
                })
                .catch((error) => {});
        }
    }, [location]);

    console.log(weatherData);

    return (
        <div className="text-xl pl-1">
            {weatherData && (
                <div className="flex items-center">
                    <TiWeatherPartlySunny className="text-2xl" />
                    <span className="text-xl pt-1">
                        {weatherData.current.temp_c}°C
                    </span>
                </div>
            )}
        </div>
    );
}
