import { useEffect, useState } from "react"
import { getTrack, type TrackDetailsResourse } from "../../DAL/api-fake"

type Props = {
  selectedTrackId: string | null
}

function useTrackDetails (id: string | null) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResourse | null>(null)

  useEffect(() => {
    
    if (!id) {
      setSelectedTrack(null)
      return
    }

    setSelectedTrack(null)

    getTrack().then((response) => {
      setSelectedTrack(response.data)
    })
  }, [id])

  return {
  selectedTrack,
  }
}

export function TrackDetails({ selectedTrackId }: Props) {
  const {selectedTrack} = useTrackDetails(selectedTrackId)
  return (
    <div>
      <h2>Track Details</h2>

      {!selectedTrackId && <span>No selected track</span>}

      {selectedTrackId && !selectedTrack && (
        <span>Loading...</span>
      )}

      {selectedTrack && (
        <div>
          <h4>{selectedTrack.attributes.title}</h4>
          <p>{selectedTrack.attributes.lyrics}</p>
        </div>
      )}
    </div>
  )
}