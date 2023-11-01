import classNames from 'classnames';

const Thumbnail = ({
  images,
  activeImageId,
  onImageClick,
}) => (
  <div className="space-y-6">
    {images.map(({ id, src, alt }) => {
      const isActive = activeImageId === id;

      return (
        <div key={id}>
          <button onClick={() => onImageClick(id)}>
            <img
              className={classNames('object-cover',
                {
                  'w-[160px] h-[80px]': isActive,
                  'w-[100px] h-[64px]': !isActive,
                }
              )}
              src={src}
              alt={alt}
            />
          </button>
        </div>
      )
    })}
  </div>
)

export default Thumbnail
