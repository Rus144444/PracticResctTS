import { useState, useEffect, type CSSProperties } from "react"
import { getTracks, getTrack, type Track, type TrackDetailsResourse } from "./DAL/api-fake"
import { MainPage } from "./MainPage/MainPage"

export function App() {
  const [tracks, setTracks] = useState <Track [] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourse | null>(null)


  useEffect(() => {
    setTimeout( async () => {
      const respons = await getTracks()
    setTracks ( respons.data )
  }, 3000)
  },[])

  const handleSelectTrack  = async (trackId: string): Promise<void> => {
    setSelectedTrackId(trackId)
    setSelectedTrack(null)

    const response = await getTrack()
    setSelectedTrack(response.data)
  }
  
  return (
    <>
      <MainPage />
      <h1>Musicfun Player</h1>
      {tracks === null && <div>Loading...</div>}
      {tracks?.length === 0 && <div>No tracks</div>}
      <ul>
        {tracks?.map((track) => {

          const style: CSSProperties = {}
          if (track.id === selectedTrackId) {
            style.border = "1px solid orange"
          }
          return (
            <li key={track.id} onClick={() => handleSelectTrack(track.id)} style={style}>
              <div>{track.attributes.title}</div>
              <audio
                controls
                src={track.attributes.attachments[0]?.url}
              ></audio>
            </li>
          )
        })}
      </ul>

       <hr />
      <h2>Track Details</h2>
      {!selectedTrackId && <span>No selected track</span>}
      {selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {selectedTrack && (
        <div>
          <h4>{selectedTrack.attributes.title}</h4>
          <p>{selectedTrack.attributes.lyrics}</p>
        </div>
      )}
      {/* {selectedTrack && selectedTrack.id !== selectedTrackId && <span>Loading...</span>} */}
    </>
  )
}