import { useRecoilState } from 'recoil'
import { Box, Button, TextField } from '@mui/material'
import {forecastState} from '../state/forecastState.js'
import axios from 'axios'
import './ZipcodeInput.css'

let locationName = ''

const getForecast = async (zipcode) => {

  let fiveDayForecast = []

  let urlLocation = 'http://dataservice.accuweather.com/locations/v1/postalcodes/US/search'
  let urlForecast = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day'
  let location = await axios.get(`${urlLocation}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${zipcode}`)
    .then(response => { return response.data[0] })

  let forecast = await axios.get(`${urlForecast}/${location.Key}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`)
    .then(response => { return response.data.DailyForecasts })

  locationName = location.EnglishName

  for (let day of forecast) {
    let currentDay = {}
    let currentDate = new Date(day.Date)
    currentDay.weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' })
    currentDay.date = `${currentDate.toLocaleDateString('en-US', { month: 'long'})} ${currentDate.getDate()}`
    currentDay.high = day.Temperature.Maximum.Value
    currentDay.low = day.Temperature.Minimum.Value
    currentDay.day = day.Day.IconPhrase
    currentDay.night = day.Night.IconPhrase
    fiveDayForecast.push(currentDay)
  }

  return fiveDayForecast
}

function ZipcodeInput() {

  const [forecast, setForecast] = useRecoilState(forecastState)

  let establishCity = async (e) => {
    e.preventDefault()
    let zipcode = e.target.zipcode.value
    let results = await getForecast(zipcode)
    setForecast(results)
  }

  return (

    <div className="Input-section">
      <h1 className="Prompt">Enter Zipcode to get Weather Forecast</h1>
      <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
        noValidate
        autoComplete="off"
        onSubmit={establishCity}
      >
        <TextField
          id="zipcode"
          label="Zipcode"
          sx={{ input: { color: 'white' } }}
          //pattern="[0-9]{5}"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary">
            Get Forecast
        </Button>
      </Box>
      <Box>
        <h2>{locationName}</h2>
      </Box>

    </div>
  );
}

export default ZipcodeInput;