import { useEffect, useState } from "react"
import { getTracks } from "../DAL/api-fake"

type Track = {
  id: string
  attributes: TrackAttributes
}

type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

type Attachment = {
  url: string
}


export function usePlaylist () {
    const [tracks, setTracks] = useState <Track [] | null>(null)

    useEffect(() => {
        setTimeout( async () => {
        const respons = await getTracks()
        setTracks ( respons.data )
    }, 3000)
    },[])

    return {
        tracks
    }
}