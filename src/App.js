import { atom, useRecoilValue, useRecoilState } from 'recoil'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'
import ZipCodeInput from './components/ZipcodeInput.js'
import Forecast from './components/Forecast.js'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ZipCodeInput />
      <Forecast />
    </QueryClientProvider>
  )
}

export default App;
