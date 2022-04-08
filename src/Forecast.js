import { atom, useRecoilState } from 'recoil'

const forecastState = atom({
  key: 'forecastState',
  default: ['80', '75', '50', '85', '90']
})

function Forecast() {

  const [forecast, setForecast] = useRecoilState(forecastState)

  return(
    <>
      {forecast.map((temp) => (<div>{temp}</div>))}
    </>
  )
}

export default Forecast;