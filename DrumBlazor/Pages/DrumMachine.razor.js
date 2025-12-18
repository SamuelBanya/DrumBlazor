let playTimer = null;

// Set the default interval to 500ms which is 120 BPM:
let intervalMs = 500;

let currentBeat = 0;

const totalBeats = 4;

const audioCache = {
  Hat: new Audio("audio/cl_hihat.wav"),
  Snare: new Audio("audio/snare.wav"),
  Kick: new Audio("audio/kick1.wav"),
  Clap: new Audio("audio/handclap.wav")
}

let currentDrumMachineState = "NOW PAUSED";

function bind(id, event, handler) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`Missing element: ${id}`);
  }

  el.addEventListener(event, handler);
}

export function playSound(button, soundKey) {
  const audio = audioCache[soundKey];

  // Safety guard for audio:
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  button.classList.toggle("sequence-on");
  button.classList.toggle("active");
  button.classList.toggle("bg-success");
}

export function sequencePlaySound(button, soundKey) {
  const audio = audioCache[soundKey];
  audio.currentTime = 0;
  audio.play();
}

export function changeDrumStateText(currentDrumMachineState) {
  let drumMachineStateSpan = document.querySelector("#DrumMachineState span");

  if (drumMachineStateSpan) {
    drumMachineStateSpan.innerText = currentDrumMachineState;
  }
}

export function playDrumMachine() {
  if (playTimer !== null) {
    return;
  }

  // Change the 'currentDrumMachineState' text:
  currentDrumMachineState = "NOW PLAYING";
  changeDrumStateText(currentDrumMachineState);

  const beats = ["1", "2", "3", "4"];
  const instruments = ["Hat", "Snare", "Kick", "Clap"];
  
  playTimer = setInterval(function() {
    // This allows it to reset to 1 after '4' is reached:
    currentBeat = (currentBeat % totalBeats) + 1;

    let sequenceOnInstruments = Array.from(document.querySelectorAll(".sequence-on"));

    const currentBeatButtons = sequenceOnInstruments.filter(el => el.id.endsWith(String(currentBeat)));

    currentBeatButtons.forEach(button => {
      const instrument = instruments.find(instrument => button.id.includes(instrument));
      if (instrument) {
        sequencePlaySound(button, instrument);
      }
    })
  }, intervalMs)
}

export function pauseDrumMachine() {
  if (playTimer !== null) {
    clearInterval(playTimer);
    playTimer = null;
  }

  // Change the 'currentDrumMachineState' text:
  currentDrumMachineState = "NOW PAUSED";
  changeDrumStateText(currentDrumMachineState);
}

export function resetDrumMachine() {
  // Stop all sounds:
  pauseDrumMachine();
  currentBeat = 0;
  
  const sequenceOnInstruments = document.querySelectorAll(".sequence-on");

  // Remove 'sequence-on' class from all drum buttons:
  sequenceOnInstruments.forEach(el => 
    el.classList.remove("sequence-on", "active", "bg-success"));

  Object.values(audioCache).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  })
}

export function changeBpm(bpmButton) {
  let bpmValue = Math.max(1, Number(bpmButton.value));
  intervalMs = 60000 / bpmValue;

  if (playTimer !== null) {
    pauseDrumMachine();
    playDrumMachine();
  }
}

export function addHandlers() {
  bind("PlayButton", "click", playDrumMachine);
  bind("PauseButton", "click", pauseDrumMachine);
  bind("ResetButton", "click", resetDrumMachine);

  const instruments = ["Hat", "Snare", "Kick", "Clap"];
  const beats = ["1", "2", "3", "4"];

  instruments.forEach(instrument => {
    beats.forEach(beat => {
      bind(`${instrument}${beat}`, 'click', () => playSound(document.getElementById(`${instrument}${beat}`), instrument));
    });
  });

  const bpmButton = document.getElementById("bpmRange");
  bpmButton.addEventListener("input", () => changeBpm(bpmButton));
}
