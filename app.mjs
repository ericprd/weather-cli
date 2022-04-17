import axios from 'axios';
import readline from 'readline';

const api = "7af6d63619ad3e168d2fec97f43d517c";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.question("city: ", city => {
	rl.question("state: ", state => {
		axios(url + city + "," + state + "&appid=" + api).then(response => {
			const tempCelcius = response.data.main.temp - 274.15;
//			console.log(response.data)
			console.log(response.data.weather[0].main);
			console.log(response.data.weather[0].description);
			console.log(`Temp: ${tempCelcius.toFixed(2)} °C`);
			rl.close();
		});
	});
});

