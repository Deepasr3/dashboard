
import './App.css'
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import RootLayout from './components/root-layouts';

function App() {

  return (
    <>
      <PrimeReactProvider>
        <RootLayout />
      </PrimeReactProvider>
    </>
  )
}

export default App
