import classNames from "classnames"

const Cursor = ({
  isActive,
}) => (
  <span className={classNames(
    isActive ? 'w-8' : 'w-1',
    !isActive && 'opacity-50',
    'inline-block h-1 bg-white-100 rounded-xl',
  )} />
)

export default Cursor
