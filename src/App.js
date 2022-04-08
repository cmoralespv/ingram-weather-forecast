import { atom, RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import ZipCodeInput from './ZipcodeInput.js'
import './App.css'

const currentZipcodeState = atom({
  key: 'Zipcode',
  default: '12345',
});

const forecastState = atom({
  key: 'Forecast',
  default: ['80', '75', '50', '85', '90']
})


function CurrentZipcode() {
  const zipcode = useRecoilValue(currentZipcodeState)
  return <div className="Label">{zipcode}</div>
}

function Forecast() {
  const forecast = useRecoilValue(forecastState)

  return(
    <>
      {forecast.map((temp) => (<div>{temp}</div>))}
    </>
  )
}

function App() {
  return (
    <RecoilRoot>
      <ZipCodeInput />
      <CurrentZipcode />
      <Forecast />
    </RecoilRoot>
  )
}

export default App;
