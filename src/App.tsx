
function App() {

  return (
    <>
       <h1>Musicfun Player</h1>
        <ul>
          <li>
            <div>Musicfun soundtrack</div>
            <audio
              controls
              src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"
            ></audio>
          </li>
          <li>
            <div>Musicfun soundtrack instrumental</div>
            <audio
              controls
              src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
            ></audio>
          </li>
        </ul>
    </>
  )
}

export default App
