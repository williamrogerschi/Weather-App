import sunnyIcon from '/assets/weather/sun.png'
import partlyCloudyIcon from '/assets/weather/partly-cloudy.png'
import cloudyIcon from '/assets/weather/cloud.png'
import overcastIcon from '/assets/weather/clouds.png'
import mistIcon from '/assets/weather/light-rain.png'
import patchyRainIcon from '/assets/weather/rainsun.png'
import patchySnowIcon from '/assets/weather/precipitation-sun.png'
import patchySleetIcon from '/assets/weather/precipitation.png'
import thunderIcon from '/assets/weather/thunderstorm.png'
import windIcon from '/assets/weather/wind.png'
import snowyIcon from '/assets/weather/snowy.png'
import moderateSnowIcon from '/assets/weather/snow.png'
import fogIcon from '/assets/weather/fog.png'
import rainIcon from '/assets/weather/rain.png'
import heavyRainIcon from '/assets/weather/heavy-rain.png'
import lightSnowIcon from '/assets/weather/lightsnow.png'
import hailIcon from '/assets/weather/hail.png'



const renderIcon = (apiCode) => {
	switch (apiCode) {
		case 1000:
			return <img className="forecast-img" src={sunnyIcon} alt="Sunny" />
		case 1003:
			return (
				<img
					className="forecast-img"
					src={partlyCloudyIcon}
					alt="Partly Cloudy"
				/>
			)
		case 1006:
			return <img className="forecast-img" src={cloudyIcon} alt="Cloudy" />
		case 1009:
			return <img className="forecast-img" src={overcastIcon} alt="Overcast" />
		case 1030:
			return <img className="forecast-img" src={mistIcon} alt="Mist" />
		case 1063:
			return (
				<img className="forecast-img" src={patchyRainIcon} alt="Patchy Rain" />
			)
		case 1066:
			return (
				<img className="forecast-img" src={patchySnowIcon} alt="Patchy Snow" />
			)
		case 1069:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Patchy Sleet"
				/>
			)
		case 1072:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Patchy Freezing Drizzle"
				/>
			)
		case 1087:
			return (
				<img
					className="forecast-img"
					src={thunderIcon}
					alt="Patchy Thunderstorms"
				/>
			)
		case 1114:
			return <img className="forecast-img" src={windIcon} alt="Blowing Snow" />
		case 1117:
			return <img className="forecast-img" src={snowyIcon} alt="Blizzard" />
		case 1135:
			return <img className="forecast-img" src={fogIcon} alt="Fog" />
		case 1147:
			return <img className="forecast-img" src={fogIcon} alt="Freezing Fog" />
		case 1150:
			return (
				<img
					className="forecast-img"
					src={mistIcon}
					alt="Patchy Light Drizzle"
				/>
			)
		case 1153:
			return <img className="forecast-img" src={mistIcon} alt="Light Drizzle" />
		case 1168:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Freezing Drizzle"
				/>
			)
		case 1171:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Heavy Freezing Drizzle"
				/>
			)
		case 1180:
			return (
				<img
					className="forecast-img"
					src={patchyRainIcon}
					alt="Patchy Light Rain"
				/>
			)
		case 1183:
			return <img className="forecast-img" src={mistIcon} alt="Light Rain" />
		case 1186:
			return (
				<img
					className="forecast-img"
					src={rainIcon}
					alt="Moderate Rain at Times"
				/>
			)
		case 1189:
			return <img className="forecast-img" src={rainIcon} alt="Moderate Rain" />
		case 1192:
			return (
				<img
					className="forecast-img"
					src={heavyRainIcon}
					alt="Heavy Rain at Times"
				/>
			)
		case 1195:
			return (
				<img className="forecast-img" src={heavyRainIcon} alt="Heavy Rain" />
			)
		case 1198:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Light Freezing Rain"
				/>
			)
		case 1201:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Heavy Freezing Rain"
				/>
			)
		case 1204:
			return (
				<img className="forecast-img" src={patchySnowIcon} alt="Light Sleet" />
			)
		case 1207:
			return (
				<img className="forecast-img" src={lightSnowIcon} alt="Heavy Sleet" />
			)
		case 1210:
			return (
				<img className="forecast-img" src={snowyIcon} alt="Patchy Light Snow" />
			)
		case 1213:
			return (
				<img className="forecast-img" src={lightSnowIcon} alt="Light Snow" />
			)
		case 1216:
			return (
				<img
					className="forecast-img"
					src={snowyIcon}
					alt="Patchy Moderate Snow"
				/>
			)
		case 1219:
			return (
				<img
					className="forecast-img"
					src={moderateSnowIcon}
					alt="Moderate Snow"
				/>
			)
		case 1222:
			return (
				<img className="forecast-img" src={snowyIcon} alt="Patchy Heavy Snow" />
			)
		case 1225:
			return (
				<img className="forecast-img" src={moderateSnowIcon} alt="Heavy Snow" />
			)
		case 1237:
			return <img className="forecast-img" src={hailIcon} alt="Ice Pellets" />
		case 1240:
			return (
				<img className="forecast-img" src={rainIcon} alt="Light Rain Showers" />
			)
		case 1243:
			return (
				<img
					className="forecast-img"
					src={heavyRainIcon}
					alt="Moderate or Heavy Rain Showers"
				/>
			)
		case 1246:
			return (
				<img
					className="forecast-img"
					src={heavyRainIcon}
					alt="Torrential Rain Showers"
				/>
			)
		case 1249:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Light Sleet Showers"
				/>
			)
		case 1252:
			return (
				<img
					className="forecast-img"
					src={patchySleetIcon}
					alt="Moderate or Heavy Sleet Showers"
				/>
			)
		case 1255:
			return (
				<img
					className="forecast-img"
					src={lightSnowIcon}
					alt="Light Snow Showers"
				/>
			)
		case 1258:
			return (
				<img
					className="forecast-img"
					src={moderateSnowIcon}
					alt="Moderate or Heavy Snow Showers"
				/>
			)
		case 1261:
			return (
				<img
					className="forecast-img"
					src={hailIcon}
					alt="Light Showers of Ice Pellets"
				/>
			)
		case 1264:
			return (
				<img
					className="forecast-img"
					src={hailIcon}
					alt="Moderate Showers of Ice Pellets"
				/>
			)
		case 1273:
			return (
				<img
					className="forecast-img"
					src={thunderIcon}
					alt="Light Rain with Thunder"
				/>
			)
		case 1276:
			return (
				<img
					className="forecast-img"
					src={thunderIcon}
					alt="Moderate or Heavy Rain with Thunder"
				/>
			)
		case 1279:
			return (
				<img
					className="forecast-img"
					src={thunderIcon}
					alt="Patchy Light Snow with Thunder "
				/>
			)
		case 1282:
			return (
				<img
					className="forecast-img"
					src={thunderIcon}
					alt="Moderate or Heavy Snow with Thunder "
				/>
			)
		default:
			return null
	}
}

const changeBG = (apiCode) => {
	switch (apiCode) {
		case 1000:
			return {
				background: 'var(--backgroundSunny)',
			}
		case 1003:
		case 1006:
		case 1009:
		case 1135:
			return {
				background: 'var(--backgroundCloudy)',
			}
		case 1030:
		case 1063:
		case 1072:
		case 1150:
		case 1153:
		case 1168:
		case 1171:
		case 1180:
		case 1183:
		case 1186:
		case 1189:
		case 1192:
		case 1195:
		case 1198:
		case 1201:
		case 1240:
		case 1243:
		case 1246:
		case 1249:
		case 1261:
		case 1264:
			return {
				background: 'var(--backgroundRainy)',
			}
		case 1069:
		case 1114:
		case 1117:
		case 1147:
		case 1204:
		case 1207:
		case 1210:
		case 1213:
		case 1216:
		case 1225:
		case 1237:
		case 1252:
		case 1255:
		case 1258:
			return {
				background: 'var(--backgroundSnowy)',
			}
		case 1087:
		case 1273:
		case 1276:
		case 1279:
		case 1282:
			return {
				background: 'var(--backgroundThunder)',
			}
		default:
			return {
				background: 'var(--background)',
			}
	}
}

export { renderIcon, changeBG }
