import { useEffect, useState } from "react"
import { getTrack } from "../DAL/api-fake"

type TrackDetailsResourse = {
  id: string
  attributes: TrackDetailsAttributes
}

type TrackDetailsAttributes = {
  title: string
  lyrics: string
  attachments: Attachment[]
}

type Attachment = {
  url: string
}

export function useTrackDetails (id: string | null) {
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
