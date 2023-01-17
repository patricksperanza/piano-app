const pianoKeys = document.querySelectorAll(".key")
pianoKeys.forEach((key) => addEventListener("click", playSoundKey))

const pianoStickers = document.querySelectorAll(".sticker")
pianoStickers.forEach((sticker) => addEventListener("click", playSoundSticker))

function playSoundKey(e) {
  const number = e.target.id
  const key = `pianoSamples/key${number}.mp3`
  new Audio(key).play()
}

function playSoundSticker(e) {
  const number = e.target.parentNode.id
  const key = `pianoSamples/key${number}.mp3`
  new Audio(key).play()
}
