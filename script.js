function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  fetch(`https://wttr.in/${city}?format=j1`)
    .then(res => res.json())
    .then(data => {
      const area = data.nearest_area[0].areaName[0].value;
      const temp = data.current_condition[0].temp_C;
      const condition = data.current_condition[0].weatherDesc[0].value;

      document.getElementById("location").textContent = area;
      document.getElementById("temperature").textContent = `${temp} °C`;
      document.getElementById("condition").textContent = condition;

      // SkySage AI comment
      let comment = "";
      if (condition.toLowerCase().includes("sun")) {
        comment = `Hey 🌞! Looks like sunny vibes in ${area}. Don’t forget your shades! 😎`;
      } else if (condition.toLowerCase().includes("rain")) {
        comment = `☔ Oops! It’s rainy in ${area}. SkySage recommends carrying an umbrella.`;
      } else if (condition.toLowerCase().includes("cloud")) {
        comment = `Cloudy skies over ${area} 🌥️. Might be a calm day.`;
      } else {
        comment = `Weather looks ${condition.toLowerCase()} in ${area}. Stay ready!`;
      }

      document.getElementById("aiResponse").textContent = comment;
    })
    .catch(err => {
      document.getElementById("aiResponse").textContent = "Hmm... I couldn’t fetch that. Try again!";
    });
}
