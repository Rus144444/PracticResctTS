import { useState} from "react"
import {PageTitle} from "../PageTitle/PageTitle"
import { Playlist } from "../Playlist/Playlist"
import { TrackDetails } from "../TrackDetails/TrackDetails"

function useMainPage () {
   const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

    const handleSelectTrack = (trackId: string) => {
        setSelectedTrackId(trackId)
    }

    return {
        selectedTrackId,
        handleSelectTrack
    }
}

export function MainPage () {
    const {selectedTrackId,  handleSelectTrack,  } = useMainPage()
    return (
        <div>
            <PageTitle title={"Musicfun Player"}/>
            <Playlist selectedTrackId={selectedTrackId} onTrackSelect={handleSelectTrack}/>
            <hr />
            <TrackDetails  selectedTrackId={selectedTrackId} />
        </div>
    )
}