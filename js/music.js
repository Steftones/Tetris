const musicPlayer = {
  volume: - 17,
  isPlaying: false,
  abruptMute(){
    Tone.Master.mute = true
    musicPlayer.isPlaying = false
  },
  mute(){
    Tone.Master.mute = false
    musicPlayer.isPlaying = false
    Tone.Transport.stop()
  },
  play(){
    Tone.Master.mute = false
    musicPlayer.isPlaying = true
    Tone.start()
    Tone.Transport.start()
  }
}

Tone.Transport.bpm.value = 150

// init sounds
let initMusic = false
window.addEventListener('click', () => {
  if (!initMusic ){
    musicPlayer.play()
    initMusic = true
  }
})

const synth = new Tone.Synth({ volume: musicPlayer.volume }).toDestination()
synth.oscillator.type = 'square'

const bassSynth = new Tone.Synth({ volume: musicPlayer.volume }).toDestination()
bassSynth.oscillator.type = 'square'

const synthNotes = [
  'E5','','B4','C5','D5','','C5','B4',
  'A4','','A4','C5','E5','','D5','C5',
  'B4','','B4','C5','D5','','E5','',
  'C5','','A4','','A4','','','',

  '','D5','','F5','A5','','G5','F5',
  'E5','','','C5','E5','','D5','C5',
  'B4','','B4','C5','D5','','E5','',
  'C5','','A4','','A4','','','',

  'E4','','','','C4','','','',
  'D4','','','','B3','','','',
  'C4','','','','A3','','','',
  'G#3','','','','B3','','','',

  'E4','','','','C4','','','',
  'D4','','','','B3','','','',
  'C4','','E4','','A4','','','',
  'G#4','','','','','','',''
]

const bassNotes = [
  'E2','E3','E2','E3','E2','E3','E2','E3',
  'A2','A3','A2','A3','A2','A3','A2','A3',
  'G#2','G#3','G#2','G#3','E2','E3','E2','E3',
  'A2','A3','A2','A3','A2','A3','B2','C3',

  'D3','D2','D3','D2','','D2','A2','F2',
  'C2','C3','C2','C3','C2','G2','','G2',
  'B2','B3','B2','B3','','E2','','G#2',
  'A2','E2','A2','E2','A2','','','',

  'A2','E2','A2','E2','A2','E2','A2','E2',
  'G#2','E2','G#2','E2','G#2','E2','G#2','E2',
  'A2','E2','A2','E2','A2','E2','A2','E2',
  'G#2','E2','G#2','E2','G#2','E2','G#2','E2',

  'A2','E2','A2','E2','A2','E2','A2','E2',
  'G#2','E2','G#2','E2','G#2','E2','G#2','E2',
  'A2','E2','A2','E2','A2','E2','A2','E2',
  'G#2','E2','G#2','E2','G#2','E2','G#2','E2'
]

let index = 0
function repeat(time){
  const position = index % synthNotes.length
  const synthNote = synthNotes[position]
  const bassNote = bassNotes[position]
  if (synthNote !== '') synth.triggerAttackRelease(synthNote, '8n', time)
  if (bassNote !== '') bassSynth.triggerAttackRelease(bassNote, '8n', time)
  index ++
}

Tone.Transport.scheduleRepeat((time) => { 
  repeat(time)
}, '8n')

document.getElementById('sound-button').addEventListener('click', () => {
  sounds.muted === false ? sounds.muted = true : sounds.muted = false
})

document.getElementById('music-button').addEventListener('click', () => {
  musicPlayer.isPlaying ? musicPlayer.mute() : musicPlayer.play()
})






