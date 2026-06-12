import {PageTitle} from "../PageTitle/PageTitle"
import { Playlist } from "../Playlist/Playlist"
import { TrackDetails } from "../TrackDetails/TrackDetails"
import { useState} from "react"
import { getTrack } from "../../DAL/api-fake"
import {type TrackDetailsResourse} from "../../DAL/api-fake"

export function MainPage () {
    
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourse | null>(null)



  const handleSelectTrack  = async (trackId: string): Promise<void> => {
    setSelectedTrackId(trackId)
    setSelectedTrack(null)

    const response = await getTrack()
    setSelectedTrack(response.data)
  }

    return (
        <div>
            <PageTitle title="Musicfun Player"/>
            <Playlist selectedTrackId={selectedTrackId} handleSelectTrack={handleSelectTrack}/>
            <hr />
            <TrackDetails selectedTrack={selectedTrack} selectedTrackId={selectedTrackId}/>
            {/* {selectedTrack && selectedTrack.id !== selectedTrackId && <span>Loading...</span>} */}
        </div>
    )
}