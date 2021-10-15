import * as Tone from 'tone';

let synth = new Tone.Synth().toDestination();

const test = () => {
  synth.triggerAttackRelease("C", "8n");
}

const handleKeyDown = (octaveNumber) => (event ) => {
  console.log("Key pressed ==>"+event.key);
  switch (event.key) {
    case "d":
      return synth.triggerAttack("C4"+octaveNumber);
    case "r":
      return synth.triggerAttack("C#4"+octaveNumber);
    case "f":
      return synth.triggerAttack("D4"+octaveNumber);
    case "t":
      return synth.triggerAttack("Eb4"+octaveNumber);
    case "g":
      return synth.triggerAttack("E4"+octaveNumber);
    case "h":
      return synth.triggerAttack("F4"+octaveNumber);
    case "u":
      return synth.triggerAttack("F#4"+octaveNumber);
    case "j":
      return synth.triggerAttack("G4"+octaveNumber);
    case "i":
      return synth.triggerAttack("Ab4"+octaveNumber);
    case "k":
      return synth.triggerAttack("A4"+octaveNumber);
    case "o":
      return synth.triggerAttack("Bb4"+octaveNumber);
    case "l":
      return synth.triggerAttack("B4"+octaveNumber);
    default:
      return;
  }
}

const handlelkeyUp = ((event) => {
  switch (event.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
    default: synth.triggerRelease();
  }
})

const handleMouseDown = (event) => {
  synth.triggerAttack(event.target.dataset.note);
}

const handleMouseUp = () => {
  synth.triggerRelease();
}

export { test, handleKeyDown, handlelkeyUp, handleMouseDown, handleMouseUp };