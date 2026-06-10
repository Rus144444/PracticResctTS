const tracks = [
  {
    title: "Musicfun soundtrack",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental -d",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental -d",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
]

const headerEl = document.createElement("h1")
headerEl.append("Musicfun Player")
 
const tracksEl = document.createElement("ul")
tracks.forEach((track) => {
    const trackEl = document.createElement("li")

    const trackPlayerEl = document.createElement("audio")
    trackPlayerEl.src = track.url
    trackPlayerEl.controls = true
  
    trackEl.append(trackPlayerEl)

    const trackTitleEl = document.createElement("div")
    trackTitleEl.append(track.title)
    trackEl.append(trackTitleEl)
    tracksEl.append(trackEl)
})
 
const rootEl = document.getElementById("root")
rootEl.append(headerEl)
rootEl.append(tracksEl)