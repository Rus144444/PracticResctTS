const tracks = [
  {
    title: "Musicfun soundtrack",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
]
 
export function App() {
  return (
    <>
      <h1>Musicfun Player</h1>
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