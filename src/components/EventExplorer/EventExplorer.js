import Header from "./components/Header"
import PopularEvents from "./components/PopularEvents"
import Tabs from "./components/Tabs"

const EventExplorer = () => (
  <div className="px-[160px] py-[100px] space-y-[100px]">
    <Header />
    <Tabs />
    <PopularEvents />
  </div>
)

export default EventExplorer
