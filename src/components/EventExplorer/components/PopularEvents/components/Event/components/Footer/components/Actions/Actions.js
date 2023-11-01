import { IoAddCircleOutline, IoBookmarkOutline, IoCalendarOutline, IoShareSocialOutline } from 'react-icons/io5'

const Actions = () => (
  <div className="space-x-3">
    <button>
      <IoAddCircleOutline className="h-[32px] w-[32px]" />
    </button>
    <button>
      <IoBookmarkOutline className="h-[32px] w-[32px]" />
    </button>
    <button>
      <IoShareSocialOutline className="h-[32px] w-[32px]" />
    </button>
    <button>
      <IoCalendarOutline className="h-[32px] w-[32px]" />
    </button>
  </div>
)

export default Actions
