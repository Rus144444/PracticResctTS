import {type Track } from "../../BLL/usePlaylist"
import { type CSSProperties } from "react"


type Props = {
    track: Track
    isSelected: boolean
    onTrackSelect: (id: string)=> void,
}

export function TrackItem ({track, onTrackSelect, isSelected}: Props) {
    const style: CSSProperties = {}
    
          if (isSelected) {
            style.border = "1px solid orange"
          }
    return(
        <li key={track.id} onClick={() => onTrackSelect(track.id)} style={style}>
            <div>{track.attributes.title}</div>
            <audio
            controls
            src={track.attributes.attachments[0]?.url}
            ></audio>
        </li>
    )
}