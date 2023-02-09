import { AppSeguro } from "./components/AppSeguro"
import { CotizadorProvider } from "./context/CotizadorProvider"

export const App = () => {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

