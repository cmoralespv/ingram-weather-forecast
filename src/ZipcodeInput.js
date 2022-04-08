import { useRecoilState } from 'recoil'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import './App.css'

const getForecast = async (zipcode) => {

  let fiveDayForecast = []

  let urlLocation = 'http://dataservice.accuweather.com/locations/v1/postalcodes/US/search'
  let urlForecast = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day'
  let location = await axios.get(`${urlLocation}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${zipcode}`)
    .then(response => { return response.data[0] })

  let forecast = await axios.get(`${urlForecast}/${location.Key}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`)
    .then(response => { return response.data.DailyForecasts })

  let locationName = location.EnglishName

  for (let day of forecast) {
    let currentDay = {}
    currentDay.date = day.Date
    currentDay.high = day.Temperature.Maximum.Value
    currentDay.low = day.Temperature.Minimum.Value
    currentDay.day = day.Day.IconPhrase
    currentDay.night = day.Night.IconPhrase
    fiveDayForecast.push(currentDay)
  }

  console.log(locationName)
  console.log(fiveDayForecast)

}

function ZipcodeInput() {

  let establishCity = (e) => {
    e.preventDefault()
    let zipcode = e.target.zipcode.value
    console.log('value: ', e.target.zipcode.value)
    getForecast(zipcode)
  }

  return (

    <div className="App">
      <h1 className="Label">Enter Zipcode to get Weather Forecast</h1>
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
          //pattern="[0-9]{5}"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained">
            Get Forecast
        </Button>
      </Box>

    </div>
  );
}

export default ZipcodeInput;