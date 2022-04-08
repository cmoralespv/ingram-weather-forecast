import { useRecoilValue} from 'recoil'
import { forecastState } from '../state/forecastState.js'

function Forecast() {

  const forecast = useRecoilValue(forecastState)
  console.log('fasdfasdfasdfasdf: ', forecast)

  return(
    <>
      {forecast.map((temp) => (<div>DATE: {temp.date} High: {temp.high} Low: {temp.low} day: {temp.day} night: {temp.night}</div>))}
    </>
  )
}

export default Forecast;