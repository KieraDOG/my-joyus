import { useState } from "react"
import Event from "./components/Event"
import Thumbnail from "./components/Thumbnail"


const EVENTS = [{
  id: 'One-dayArtist',
  user: {
    avatar: 'https://picsum.photos/seed/EduardFranz/500/700',
    displayName: 'Eduard Franz',
  },
  title: 'One-day Artist',
  tagline: 'Immersive experience of how the artists build up one exhibition',
  createdAt: '2023-10-29T10:03:29.109Z',
  description: `Do you have a dream of becoming an artist? Here's a once-in-a-lifetime opportunity! The team led by Mr. Eduard Franz decided to launch an exhibition that "engaged the entire city in creation".`,
  images: [
    { id: 'OnedayArtist1', src: 'https://picsum.photos/seed/OnedayArtist1/1920/1080', alt: 'One-day Artist' },
    { id: 'OnedayArtist2', src: 'https://picsum.photos/seed/OnedayArtist2/1920/1080', alt: 'One-day Artist' },
    { id: 'OnedayArtist3', src: 'https://picsum.photos/seed/OnedayArtist3/1920/1080', alt: 'One-day Artist' },
    { id: 'OnedayArtist4', src: 'https://picsum.photos/seed/OnedayArtist4/1920/1080', alt: 'One-day Artist' },
    { id: 'OnedayArtist5', src: 'https://picsum.photos/seed/OnedayArtist5/1920/1080', alt: 'One-day Artist' },
  ],
  followers: [
    { id: 'Alice', src: 'https://picsum.photos/seed/Alice/100/200', alt: 'Alice' },
    { id: 'Bob', src: 'https://picsum.photos/seed/Bob/100/200', alt: 'Bob' },
    { id: 'Charlie', src: 'https://picsum.photos/seed/Charlie/100/200', alt: 'Charlie' },
    { id: 'Dave', src: 'https://picsum.photos/seed/Dave/100/200', alt: 'Dave' },
  ],
},
{
  id: 'UrbanGreeningWorkshop',
  user: {
    avatar: 'https://picsum.photos/seed/LindaJohnson/500/700',
    displayName: 'Linda Johnson',
  },
  title: 'Urban Greening Workshop',
  tagline: 'A dive into sustainable city planning with hands-on experience',
  createdAt: '2023-11-10T15:20:41.212Z',
  description: `Ever wondered how urban greening initiatives come to life? Join the workshop led by Ms.Linda Johnson to get a practical insight into sustainable urban planning.Participants will engage in designing green spaces, understanding the integration of nature with urban infrastructure, and creating a small- scale model of a green urban area.`,
  images: [
    { id: 'UrbanGreeningWorkshop1', src: 'https://picsum.photos/seed/UrbanGreeningWorkshop1/1920/1080', alt: 'Urban Greening Workshop' },
    { id: 'UrbanGreeningWorkshop2', src: 'https://picsum.photos/seed/UrbanGreeningWorkshop2/1920/1080', alt: 'Urban Greening Workshop' },
  ],
  followers: [
    { id: 'Emily', src: 'https://picsum.photos/seed/Emily/100/200', alt: 'Emily' },
    { id: 'Frank', src: 'https://picsum.photos/seed/Frank/100/200', alt: 'Frank' },
    { id: 'Grace', src: 'https://picsum.photos/seed/Grace/100/200', alt: 'Grace' },
    { id: 'Henry', src: 'https://picsum.photos/seed/Henry/100/200', alt: 'Henry' },
  ],
}]

const PopularEvents = () => {
  const [event, setEvent] = useState(EVENTS[0])

  return (
    <div className="flex gap-20">
      <Thumbnail
        activeImageId={event.id}
        onImageClick={(id) => setEvent(EVENTS.find((event) => event.id === id))}
        images={EVENTS.map(({ id, user }) => ({ id, src: user.avatar, alt: user.displayName }))}
      />
      <div className="flex-1">
        <Event event={event} />
      </div>
    </div>
  )
}

export default PopularEvents
