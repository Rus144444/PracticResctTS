import { useState} from "react"

export function useMainPage () {
   const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

    const handleSelectTrack = (trackId: string) => {
        setSelectedTrackId(trackId)
    }

    return {
        selectedTrackId,
        handleSelectTrack
    }
}