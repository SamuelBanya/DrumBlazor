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

let currentDrumMachineState = "NOW PLAYING";

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

export function playDrumMachine() {
  if (playTimer !== null) {
    return;
  }

  // Change the 'currentDrumMachineState' text:
  currentDrumMachineState = "NOW PLAYING";

  let drumMachineState = document.getElementById("DrumMachineState");

  if (drumMachineState) {
    drumMachineState.innerText = currentDrumMachineState;
  }
  
  playTimer = setInterval(function() {
    // This allows it to reset to 1 after '4' is reached:
    currentBeat = (currentBeat % totalBeats) + 1;

    let sequenceOnInstruments = document.querySelectorAll(".sequence-on");

    let beat1InstrumentsArray = [];
    let beat2InstrumentsArray = [];
    let beat3InstrumentsArray = [];
    let beat4InstrumentsArray = [];

    for (var i = 0; i < sequenceOnInstruments.length; i++) {
      let el = sequenceOnInstruments[i];
      if (el.id.includes("1")) {
        beat1InstrumentsArray.push(sequenceOnInstruments[i]);
      } else if (el.id.includes("2")) {
        beat2InstrumentsArray.push(sequenceOnInstruments[i]);
      } else if (el.id.includes("3")) {
        beat3InstrumentsArray.push(sequenceOnInstruments[i]);
      } else if (el.id.includes("4")) {
        beat4InstrumentsArray.push(sequenceOnInstruments[i]);
      }
    }

    if (currentBeat == 1) {
      for (var i = 0; i < beat1InstrumentsArray.length; i++) {
        if (beat1InstrumentsArray[i].id.includes("Hat")) {
          sequencePlaySound(beat1InstrumentsArray[i], "Hat");
        } else if (beat1InstrumentsArray[i].id.includes("Snare")) {
          sequencePlaySound(beat1InstrumentsArray[i], "Snare");
        } else if (beat1InstrumentsArray[i].id.includes("Kick")) {
          sequencePlaySound(beat1InstrumentsArray[i], "Kick");
        } else if (beat1InstrumentsArray[i].id.includes("Clap")) {
          sequencePlaySound(beat1InstrumentsArray[i], "Clap");
        }
      }
    } else if (currentBeat == 2) {
        for (var i = 0; i < beat2InstrumentsArray.length; i++) {
          if (beat2InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat2InstrumentsArray[i], "Hat");
          } else if (beat2InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat2InstrumentsArray[i], "Snare");
          } else if (beat2InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat2InstrumentsArray[i], "Kick");
          } else if (beat2InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat2InstrumentsArray[i], "Clap");
          }
        }
      } else if (currentBeat == 3) {
        for (var i = 0; i < beat3InstrumentsArray.length; i++) {
          if (beat3InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat3InstrumentsArray[i], "Hat");
          } else if (beat3InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat3InstrumentsArray[i], "Snare");
          } else if (beat3InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat3InstrumentsArray[i], "Kick");
          } else if (beat3InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat3InstrumentsArray[i], "Clap");
          }
        }
      } else if (currentBeat == 4) {
        for (var i = 0; i < beat4InstrumentsArray.length; i++) {
          if (beat4InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat4InstrumentsArray[i], "Hat");
          } else if (beat4InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat4InstrumentsArray[i], "Snare");
          } else if (beat4InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat4InstrumentsArray[i], "Kick");
          } else if (beat4InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat4InstrumentsArray[i], "Clap");
          }
        }
      }
  }, intervalMs)
}

export function pauseDrumMachine() {
  if (playTimer !== null) {
    clearInterval(playTimer);
    playTimer = null;
  }
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

  bind("Hat1", "click", () => playSound(document.getElementById("Hat1"), "Hat"));
  bind("Hat2", "click", () => playSound(document.getElementById("Hat2"), "Hat"));
  bind("Hat3", "click", () => playSound(document.getElementById("Hat3"), "Hat"));
  bind("Hat4", "click", () => playSound(document.getElementById("Hat4"), "Hat"));

  bind("Snare1", "click", () => playSound(document.getElementById("Snare1"), "Snare"));
  bind("Snare2", "click", () => playSound(document.getElementById("Snare2"), "Snare"));
  bind("Snare3", "click", () => playSound(document.getElementById("Snare3"), "Snare"));
  bind("Snare4", "click", () => playSound(document.getElementById("Snare4"), "Snare"));

  bind("Kick1", "click", () => playSound(document.getElementById("Kick1"), "Kick"));
  bind("Kick2", "click", () => playSound(document.getElementById("Kick2"), "Kick"));
  bind("Kick3", "click", () => playSound(document.getElementById("Kick3"), "Kick"));
  bind("Kick4", "click", () => playSound(document.getElementById("Kick4"), "Kick"));

  bind("Clap1", "click", () => playSound(document.getElementById("Clap1"), "Clap"));
  bind("Clap2", "click", () => playSound(document.getElementById("Clap2"), "Clap"));
  bind("Clap3", "click", () => playSound(document.getElementById("Clap3"), "Clap"));
  bind("Clap4", "click", () => playSound(document.getElementById("Clap4"), "Clap"));

  const bpmButton = document.getElementById("bpmRange");
  bpmButton.addEventListener("input", () => changeBpm(bpmButton));
}
