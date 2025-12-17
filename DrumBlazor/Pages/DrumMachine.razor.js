export function alertUser() {
    alert('The button was selected!');
}

export function playSound(audioFilePath) {
  // const audioElement = new Audio("car_horn.wav");
  const audioElement = new Audio(audioFilePath);
  audioElement.play();
}
  
export function addHandlers() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", alertUser);

  const hat1 = document.getElementById("Hat1");
  hat1.addEventListener("click", () => playSound("audio/cl_hihat.wav"));

  const hat2 = document.getElementById("Hat2");
  hat2.addEventListener("click", () => playSound("audio/cl_hihat.wav"));

  const hat3 = document.getElementById("Hat3");
  hat3.addEventListener("click", () => playSound("audio/cl_hihat.wav"));

  const hat4 = document.getElementById("Hat4");
  hat4.addEventListener("click", () => playSound("audio/cl_hihat.wav"));

  const snare1 = document.getElementById("Snare1");
  snare1.addEventListener("click", () => playSound("audio/snare.wav"));

  const snare2 = document.getElementById("Snare2");
  snare2.addEventListener("click", () => playSound("audio/snare.wav"));

  const snare3= document.getElementById("Snare3");
  snare3.addEventListener("click", () => playSound("audio/snare.wav"));

  const snare4= document.getElementById("Snare4");
  snare4.addEventListener("click", () => playSound("audio/snare.wav"));

  const kick1= document.getElementById("Kick1");
  kick1.addEventListener("click", () => playSound("audio/kick1.wav"));

  const kick2= document.getElementById("Kick2");
  kick2.addEventListener("click", () => playSound("audio/kick1.wav"));

  const kick3= document.getElementById("Kick3");
  kick3.addEventListener("click", () => playSound("audio/kick1.wav"));

  const kick4= document.getElementById("Kick4");
  kick4.addEventListener("click", () => playSound("audio/kick1.wav"));

  const clap1= document.getElementById("Clap1");
  clap1.addEventListener("click", () => playSound("audio/handclap.wav"));

  const clap2= document.getElementById("Clap2");
  clap2.addEventListener("click", () => playSound("audio/handclap.wav"));

  const clap3= document.getElementById("Clap3");
  clap3.addEventListener("click", () => playSound("audio/handclap.wav"));

  const clap4= document.getElementById("Clap4");
  clap4.addEventListener("click", () => playSound("audio/handclap.wav"));
}
