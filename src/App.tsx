import { RecoilEnv } from 'recoil'
import Home from './Home'

// temporary fix for recoil duplicate atom key checking
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
