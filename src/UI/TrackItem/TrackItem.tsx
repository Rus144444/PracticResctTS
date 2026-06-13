import clsx from "clsx"
import {type Track } from "../../BLL/usePlaylist"
import style from "./TrackItem.module.css"

type Props = {
    track: Track
    isSelected: boolean
    onTrackSelect: (id: string)=> void,
}



export function TrackItem ({track, onTrackSelect, isSelected}: Props) {
    const classNames = clsx({
    [style.track]: true,
    [style.selected]: isSelected,
  })

    return(
        <li key={track.id} onClick={() => onTrackSelect(track.id)} className={classNames}>
            <div>{track.attributes.title}</div>
            <audio
            controls
            src={track.attributes.attachments[0]?.url}
            ></audio>
        </li>
    )
}