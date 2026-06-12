import {type TrackDetailsResourse} from "../../DAL/api-fake"

type Props = {
    selectedTrack: TrackDetailsResourse | null
    selectedTrackId: string | null
}

export function TrackDetails ({selectedTrack, selectedTrackId}: Props) {
    return <div><h2>Track Details</h2>
      {!selectedTrackId && <span>No selected track</span>}
      {selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {selectedTrack && (
        <div>
          <h4>{selectedTrack.attributes.title}</h4>
          <p>{selectedTrack.attributes.lyrics}</p>
        </div>
      )}</div>
}