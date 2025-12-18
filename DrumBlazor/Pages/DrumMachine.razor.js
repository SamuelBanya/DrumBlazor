let playTimer = null;
let bpmSpeed = 60;

export function alertUser() {
    alert('The button was selected!');
}

export function playSound(button, audioFilePath) {
  const audioElement = new Audio(audioFilePath);
  audioElement.play();

  const isOn = button.classList.contains("sequence-on");

  if (isOn) {
    button.classList.remove("active", "bg-success", "sequence-on");
  } else {
    button.classList.add("active", "bg-success", "sequence-on");
  }
}

export function sequencePlaySound(button, audioFilePath) {
  const audioElement = new Audio(audioFilePath);
  audioElement.play();
}

export function playDrumMachine(button) {
  let currentBeat = 0;
  const totalBeats = 4;
  
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
          sequencePlaySound(beat1InstrumentsArray[i], "audio/cl_hihat.wav");
        } else if (beat1InstrumentsArray[i].id.includes("Snare")) {
          sequencePlaySound(beat1InstrumentsArray[i], "audio/snare.wav");
        } else if (beat1InstrumentsArray[i].id.includes("Kick")) {
          sequencePlaySound(beat1InstrumentsArray[i], "audio/kick1.wav");
        } else if (beat1InstrumentsArray[i].id.includes("Clap")) {
          sequencePlaySound(beat1InstrumentsArray[i], "audio/handclap.wav");
        }
      }
    } else if (currentBeat == 2) {
        for (var i = 0; i < beat2InstrumentsArray.length; i++) {
          if (beat2InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat2InstrumentsArray[i], "audio/cl_hihat.wav");
          } else if (beat2InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat2InstrumentsArray[i], "audio/snare.wav");
          } else if (beat2InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat2InstrumentsArray[i], "audio/kick1.wav");
          } else if (beat2InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat2InstrumentsArray[i], "audio/handclap.wav");
          }
        }
      } else if (currentBeat == 3) {
        for (var i = 0; i < beat3InstrumentsArray.length; i++) {
          if (beat3InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat3InstrumentsArray[i], "audio/cl_hihat.wav");
          } else if (beat3InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat3InstrumentsArray[i], "audio/snare.wav");
          } else if (beat3InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat3InstrumentsArray[i], "audio/kick1.wav");
          } else if (beat3InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat3InstrumentsArray[i], "audio/handclap.wav");
          }
        }
      } else if (currentBeat == 4) {
        for (var i = 0; i < beat4InstrumentsArray.length; i++) {
          if (beat4InstrumentsArray[i].id.includes("Hat")) {
            sequencePlaySound(beat4InstrumentsArray[i], "audio/cl_hihat.wav");
          } else if (beat4InstrumentsArray[i].id.includes("Snare")) {
            sequencePlaySound(beat4InstrumentsArray[i], "audio/snare.wav");
          } else if (beat4InstrumentsArray[i].id.includes("Kick")) {
            sequencePlaySound(beat4InstrumentsArray[i], "audio/kick1.wav");
          } else if (beat4InstrumentsArray[i].id.includes("Clap")) {
            sequencePlaySound(beat4InstrumentsArray[i], "audio/handclap.wav");
          }
        }
      }
  }, 500)
}

export function pauseDrumMachine(button) {
  if (playTimer !== null) {
    clearInterval(playTimer);
    playTimer = null;
  }
}

// TODO:
// Make BPM range button actually work:
export function changeBpm(bpmButton) {
  alert("bpmButton.value: " + bpmButton.value);
  let bpmValue = Number(bpmButton.value);
  let intervalMs = 6000 / bpmValue;
}
  
export function addHandlers() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", alertUser);

  const playButton = document.getElementById("PlayButton");
  playButton.addEventListener("click", () => playDrumMachine(playButton));

  const pauseButton = document.getElementById("PauseButton");
  pauseButton.addEventListener("click", () => pauseDrumMachine(playButton));

  const hat1 = document.getElementById("Hat1");
  hat1.addEventListener("click", () => playSound(hat1, "audio/cl_hihat.wav"));

  const hat2 = document.getElementById("Hat2");
  hat2.addEventListener("click", () => playSound(hat2, "audio/cl_hihat.wav"));

  const hat3 = document.getElementById("Hat3");
  hat3.addEventListener("click", () => playSound(hat3, "audio/cl_hihat.wav"));

  const hat4 = document.getElementById("Hat4");
  hat4.addEventListener("click", () => playSound(hat4, "audio/cl_hihat.wav"));

  const snare1 = document.getElementById("Snare1");
  snare1.addEventListener("click", () => playSound(snare1, "audio/snare.wav"));

  const snare2 = document.getElementById("Snare2");
  snare2.addEventListener("click", () => playSound(snare2, "audio/snare.wav"));

  const snare3 = document.getElementById("Snare3");
  snare3.addEventListener("click", () => playSound(snare3, "audio/snare.wav"));

  const snare4 = document.getElementById("Snare4");
  snare4.addEventListener("click", () => playSound(snare4, "audio/snare.wav"));

  const kick1 = document.getElementById("Kick1");
  kick1.addEventListener("click", () => playSound(kick1, "audio/kick1.wav"));

  const kick2 = document.getElementById("Kick2");
  kick2.addEventListener("click", () => playSound(kick2, "audio/kick1.wav"));

  const kick3 = document.getElementById("Kick3");
  kick3.addEventListener("click", () => playSound(kick3, "audio/kick1.wav"));

  const kick4 = document.getElementById("Kick4");
  kick4.addEventListener("click", () => playSound(kick4, "audio/kick1.wav"));

  const clap1 = document.getElementById("Clap1");
  clap1.addEventListener("click", () => playSound(clap1, "audio/handclap.wav"));

  const clap2 = document.getElementById("Clap2");
  clap2.addEventListener("click", () => playSound(clap2, "audio/handclap.wav"));

  const clap3 = document.getElementById("Clap3");
  clap3.addEventListener("click", () => playSound(clap3, "audio/handclap.wav"));

  const clap4 = document.getElementById("Clap4");
  clap4.addEventListener("click", () => playSound(clap4, "audio/handclap.wav"));

  const bpmButton = document.getElementById("bpmRange");
  bpmButton.addEventListener("click", () => changeBPM(bpmButton));
}
