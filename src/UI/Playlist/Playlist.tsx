import { type CSSProperties } from "react"
import { usePlaylist } from "../../BLL/usePlaylist"


type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string) => void
}




export function Playlist ({ selectedTrackId, onTrackSelect}: Props) {
    const {tracks} = usePlaylist()
    return <div>
        {tracks === null && <div>Loading...</div>}
        {tracks?.length === 0 && <div>No tracks</div>}
      <ul>
        {tracks?.map((track) => {

          const style: CSSProperties = {}
          if (track.id === selectedTrackId) {
            style.border = "1px solid orange"
          }
          return (
            <li key={track.id} onClick={() => onTrackSelect(track.id)} style={style}>
              <div>{track.attributes.title}</div>
              <audio
                controls
                src={track.attributes.attachments[0]?.url}
              ></audio>
            </li>
          )
        })}
      </ul>
    </div>
}