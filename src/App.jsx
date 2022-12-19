import { Banner } from "./components/Banner"
import { Header } from "./components/Header"
import { Benefits } from "./components/Benefits"
import { Steps } from "./components/Steps"
import { Timeline } from "./components/Timeline"
import { Products } from "./components/Products"
import { Contact } from "./components/Contact"
import "./assets/global.css"
import { Guide } from "./components/Guide"
import { Line } from "./components/Line"



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Line />
      <Steps />
      <Line />
      <Guide />
      <Line />
      <Timeline />
      <Line />
      <Products />
      <Line />
      <Contact />
    </div>
  )
}

export default App
