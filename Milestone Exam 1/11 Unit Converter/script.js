function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  const celsiusTemperature = 25;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
  
  