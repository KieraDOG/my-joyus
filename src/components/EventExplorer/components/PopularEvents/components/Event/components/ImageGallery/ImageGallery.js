import { useEffect, useState } from "react"
import Controller from "./components/Controller"

const ImageGallery = ({
  images,
}) => {
  const [activeImage, setActiveImage] = useState(images[0])
  const activeIndex = images.indexOf(activeImage)

  useEffect(() => {
    setActiveImage(images[0])
  }, [images]);

  const handleBack = () => {
    if (activeIndex === 0) {
      setActiveImage(images[images.length - 1])

      return
    }

    setActiveImage(images[activeIndex - 1])
  }

  const handleNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveImage(images[0])

      return
    }

    setActiveImage(images[activeIndex + 1])
  }

  return (
    <>
      <div className="relative">
        <img className="rounded h-500px object-fit" src={activeImage.src} alt={activeImage.alt} />
        <Controller
          onBack={handleBack}
          onNext={handleNext}
          count={images.length}
          activeIndex={activeIndex}
        />
      </div>
    </>
  )
}

export default ImageGallery
