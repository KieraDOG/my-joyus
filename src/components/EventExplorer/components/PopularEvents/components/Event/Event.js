import Description from "./components/Description"
import Footer from "./components/Footer"
import ImageGallery from "./components/ImageGallery"
import Metadata from "./components/Metadata"


const Event = ({ event }) => {
  const { user, title, tagline, createdAt, description, images, followers } = event

  return (
    <div className="space-y-8">
      <Metadata user={user} title={title} tagline={tagline} createdAt={createdAt} />
      <Description description={description} />
      <ImageGallery images={images} />
      <Footer followers={followers} />
    </div>
  )
}

export default Event
