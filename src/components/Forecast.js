import { useRecoilValue} from 'recoil'
import { Box } from '@mui/material'
import { forecastState } from '../state/forecastState.js'
import './Forecast.css'

function Forecast() {

  const forecast = useRecoilValue(forecastState)

  return(
    <>
      {forecast.map((temp, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: 1/5,
              justifyItems: 'center',
              p: 1,
              m: 1,
              bgcolor: 'white',
              borderRadius: 1,
            }}>
              <div className="Weekday-label">{temp.weekday}</div>
              <div className="Date-label">{temp.date}</div>
              <div className="Weather-temperature-label">HIGH</div>
              <div className="Weather-temperature-high">{temp.high} °F</div>
              <div className="Weather-temperature-label">LOW</div>
              <div className="Weather-temperature-low">{temp.low} °F</div>
              <div className="Weather-day-label">DAY</div>
              <div className="Weather-day-data">{temp.day}</div>
              <div className="Weather-night-label">NIGHT</div>
              <div className="Weather-night-data">{temp.night}</div>
          </Box>
        )
      })}
    </>
  )
}

export default Forecast;