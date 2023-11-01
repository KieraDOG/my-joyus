import Montserrat from 'components/Montserrat'

const Metadata = ({
  user,
  title,
  tagline,
  createdAt,
}) => (
  <div className="flex items-center gap-x-6">
    <img className="rounded-full object-cover w-[80px] h-[80px]" src={user.avatar} alt={user.displayName} />
    <Montserrat>
      <div className="space-y-3 leading-snug">
        <div className="text-black-100 text-2xl font-bold">{title}</div>
        <div className="text-grey-100">{tagline}</div>
        <div className="text-orange-200 font-medium">{createdAt}</div>
      </div>
    </Montserrat>
  </div>
)

export default Metadata
