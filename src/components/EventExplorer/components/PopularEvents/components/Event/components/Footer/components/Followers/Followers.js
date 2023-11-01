import Montserrat from 'components/Montserrat'
import { Fragment } from 'react'

const Followers = ({
  followers,
}) => (
  <div className="flex items-center">
    {followers.reduce((accumulator, { id, src, alt }) => (
      <Fragment key={id}>
        <img className="w-[30px] h-[30px] shadow rounded-full" src={src} alt={alt} />
        {accumulator && (
          <div className="flex -translate-x-[10px]">
            {accumulator}
          </div>
        )}
      </Fragment>
    ), null)}

    <div className="text-grey-100">
      <Montserrat>+32 users joined this event</Montserrat>
    </div>
  </div>
)

export default Followers
