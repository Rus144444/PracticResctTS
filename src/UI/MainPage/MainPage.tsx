import {PageTitle} from "../PageTitle/PageTitle"
import { Playlist } from "../Playlist/Playlist"
import { TrackDetails } from "../TrackDetails/TrackDetails"

export function MainPage () {

    return <div>
        <PageTitle/>
        <Playlist/>
        <TrackDetails/>
        Main Page
    </div>
}