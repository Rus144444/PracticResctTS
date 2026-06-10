import { useState, useEffect } from "react"
import { getTrack } from "./DAL/api-fake"
 
type Attachment = {
  url: string
}

type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

type Track = {
  id: string
  attributes: TrackAttributes
}
export function App() {
  const [tracks, setTracks] = useState <Track [] | null>(null)

  useEffect(() => {
    setTimeout( async()=> {
      const respons = await getTrack()
    setTracks(respons.data)
  }, 3000)
  },[])

  return (
    <>
      <h1>Musicfun Player</h1>
      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks</div>}
      <ul>
        {tracks?.map((track) => {
          return (
            <li key={track.id}>
              <div>{track.attributes.title}</div>
              <audio
                controls
                src={track.attributes.attachments[0]?.url}
              ></audio>
            </li>
          )
        })}
      </ul>
    </>
  )
}