import { useState, useEffect } from "react"

type Track = {
  id: number
  title: string
  url: string
}
 
export function App() {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    setTimeout(()=> {
    setTracks([{
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
              <div>{track.title}</div>
              <audio
                controls
                src={track.url}
              ></audio>
            </li>
          )
        })}
      </ul>
    </>
  )
}