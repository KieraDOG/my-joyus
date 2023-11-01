import Actions from "./components/Actions"
import Followers from "./components/Followers"

const Footer = ({
  followers,
}) => (
  <div className="flex items-center">
    <div className="flex-1">
      <Followers followers={followers} />
    </div>
    <Actions />
  </div>
)

export default Footer
