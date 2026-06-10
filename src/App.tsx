import { useState } from "react"

type Track = {
  id: number
  title: string
  url: string
}
 
export function App() {
  const [tracks] = useState<Track[] | null>([
  {
      id: 1,
      title: "Musicfun soundtrack",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 2,
      title: "Musicfun soundtrack instrumental",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 3,
      title: "Musicfun soundtrack instrumental",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 4,
      title: "Musicfun soundtrack instrumental",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
])

  return (
    <>
      <h1>Musicfun Player</h1>
      {tracks === null && <span>Loading...</span>}
      {tracks?.length === 0 && <span>No tracks</span>}
      <ul>
        {tracks.map((track) => {
          return (
            <li>
              <div>{track.title}</div>
              <audio
                controls //controls={true}
                src={track.url}
              ></audio>
            </li>
          )
        })}
      </ul>
    </>
  )
}