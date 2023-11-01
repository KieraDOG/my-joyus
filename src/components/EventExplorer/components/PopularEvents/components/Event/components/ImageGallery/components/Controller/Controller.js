import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import Cursor from './components/Cursor'

const Controller = ({
  onBack,
  onNext,
  count,
  activeIndex,
}) => (
  <div>
    <div className="absolute inset-x-4 inset-y-0 flex justify-between items-center text-white-100">
      <button onClick={onBack}>
        <IoChevronBackOutline className="h-[36px] w-[36px]" />
      </button>
      <button onClick={onNext}>
        <IoChevronForwardOutline className="h-[36px] w-[36px]" />
      </button>
    </div>
    <div className="absolute inset-x-0 bottom-8 text-center space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <Cursor key={index} isActive={activeIndex === index} />
      ))}
    </div>
  </div>
)

export default Controller
