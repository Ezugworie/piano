import React from 'react'
import Octave from './Octave'
// import '../css/piano.css'

function Piano() {
  return (
    // <div className="w-screen">
      <div className="flex flex-shrink min-h-screen bg-base-300 w-full justify-center items-center overflow-x-scroll">
        <Octave octaveNumber={5}/>
        <Octave octaveNumber={5}/>
        <Octave octaveNumber={5}/>
        <Octave octaveNumber={5}/>

      </div>
    // </div>
  )
}

export default Piano
