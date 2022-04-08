import { QueryClient, QueryClientProvider } from 'react-query'
import { Box } from '@mui/material'
import ZipCodeInput from './components/ZipcodeInput.js'
import Forecast from './components/Forecast.js'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ZipCodeInput />
        <Box className="Forecast">
          <Forecast />
        </Box>
    </QueryClientProvider>
  )
}

export default App;
