
import { usePlaylist } from "../../BLL/usePlaylist"
import { TrackItem } from "../TrackItem/TrackItem"

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
          return (
            <TrackItem key={track.id} onTrackSelect={onTrackSelect} track={track} isSelected={selectedTrackId === track.id}/>
          )
        })}
      </ul>
    </div>
}