import { atom, RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'
import ZipCodeInput from './ZipcodeInput.js'
import Forecast from './Forecast.js'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ZipCodeInput />
        <Forecast />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App;
