import React, { useEffect, useRef } from 'react';
import '../css/octave.css'
import { handleKeyDown, handleMouseDown, handleMouseUp, handlelkeyUp } from '../utils/piano'

export default function Octave(props) {
  console.log("props => "+props.octaveNumber)

  const setup = () => {
    const keys = document.querySelectorAll('.key')
    keys.forEach((key) => {
      key.addEventListener('mousedown', handleMouseDown)
      key.addEventListener('mouseup', handleMouseUp)
      key.addEventListener('keydown', handleKeyDown(props.octaveNumber))
      key.addEventListener('keyup', handlelkeyUp)
    })
  }

  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    setup();
    return () => {
      mounted.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <div className="max-w-md flex flex-col mr-2">
      <div className="flex flex-row" onLoad={setup}>
        <div data-note="C4" className="white--key -mx-2 key">
          <span className="text-2xs">C</span>
        </div>
        <div data-note="C#4" className="black--key key">
          <span className="text-2xs">C&#9839;</span>
        </div>
        <div data-note="D4" className="white--key -mx-2  key text-xs">
          <span className="text-2xs">D</span>
        </div>
        <div data-note="Eb4" className="black--key key">
          <span className="text-2xs">E&#9837;</span>
        </div>
        <div data-note="E4" className="white--key -ml-2 key">
          <span className="text-2xs">E</span>
        </div>
        <div data-note="F4" className="white--key -mr-2 key">
          <span className="text-2xs">F</span>
        </div>
        <div data-note="F#4" className="black--key key">
          <span className="text-2xs">F&#9839;</span>
        </div>
        <div data-note="G4" className="white--key -mx-2 key">
          <span className="text-2xs">G</span>
        </div>
        <div data-note="Ab4" className="black--key key">
          <span className="text-2xs">A&#9837;</span>
        </div>
        <div data-note="A4" className="white--key -mx-2 key">
          <span className="text-2xs">A</span>
        </div>
        <div data-note="Bb4" className="black--key key">
          <span className="text-2xs">B&#9837;</span>
        </div>
        <div data-note="B4" className="white--key -ml-2 key text-2xs">
          <span className="text-2xs">B</span>
        </div>
      </div>
    </div>
  )
}
