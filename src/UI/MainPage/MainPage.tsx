import {PageTitle} from "../PageTitle/PageTitle"
import { Playlist } from "../Playlist/Playlist"
import { TrackDetails } from "../TrackDetails/TrackDetails"
import { useMainPage } from "../../BLL/useMainPage"

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