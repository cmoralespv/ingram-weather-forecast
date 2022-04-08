import { RecoilRoot, atom, useRecoilValue, useRecoilState, selector } from 'recoil'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import config from './config.js'
import './App.css'


function getforecast() {
    axios.get(
      `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${config}&q=${85006}`
    )
}




function ZipcodeInput() {

  return (

    <div className="App">
      <header className="Label">
        Enter Zipcode to get Weather Forecast
      </header>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate="false"
      autoComplete="off"
    >
      <TextField
        type="text"

        //pattern="[0-9]{5}"
        minlength="5"
        maxlength="5"
        id="outlined-basic"
        label="Zipcode"
        variant="outlined"
        />

    </Box>
    </div>
  );
}

export default ZipcodeInput;