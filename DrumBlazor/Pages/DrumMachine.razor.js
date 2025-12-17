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

export function playDrumMachine(button) {
  alert("Drum machine is currently playing!");

  let currentBeat = 1;

  // TODO:
  // Fix timer
  const playTimer = setInterval(function() {
    if (currentBeat >= 4) {
      currentBeat = 1;
      console.log("currentBeat reset to 1!")
    }
    currentBeat += 1;
    console.log("Adding 1 to current beat!");
    console.log("currentBeat: " + currentBeat);
  }, 1000)
}

export function pauseDrumMachine(button) {
  alert("Drum machine is currently paused!");
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
}
