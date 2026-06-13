import { usePlaylist } from "../../BLL/usePlaylist"
import { TrackItem } from "../TrackItem/TrackItem"
import style from "./Playlist.module.css"

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist ({ selectedTrackId, onTrackSelect}: Props) {
    const {tracks} = usePlaylist()
    return <div>
        {tracks === null && <div>Loading...</div>}
        {tracks?.length === 0 && <div>No tracks</div>}
      <ul className={style.tracks}>
        {tracks?.map((track) => {
          return (
            <TrackItem key={track.id} onTrackSelect={onTrackSelect} track={track} isSelected={selectedTrackId === track.id}/>
          )
        })}
      </ul>
    </div>
}