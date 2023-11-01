import Montserrat from "components/Montserrat"

const Tabs = () => (
  <Montserrat>
    <div className="max-w-[1200px] mx-auto border-b border-blue-200 text-center text-2xl font-medium color-black-100">
      <button className="w-1/4 border-b-4 border-orange-100 mb-[-1px] pb-8">Popular</button>
      <button className="w-1/4 pb-8">Top rated</button>
      <button className="w-1/4 pb-8">New</button>
      <button className="w-1/4 pb-8">Followed</button>
    </div>
  </Montserrat>
)

export default Tabs
