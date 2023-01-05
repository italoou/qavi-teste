import './App.css';

import React, { useEffect, useState} from "react";

function App() {

  const [time, setTime] = useState((5 ))
  //timer == 1 => ativo
  //timer == 0 => inativo
  const [timerState, setTimerState] = useState(0);

  const minutes = Math.floor (time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const timer = setInterval(()=>{
      if(time === 0 || time < 0){
        setTime(0);
      }
      else if (time > 0 && timerState === 1){
        setTime(time - 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [time,timerState])

  const Iniciar = () => {
    setTimerState(1);
    // setTime(time)
  }
  const Pausar = () => {
    setTimerState(0);
    clearInterval()
  } 
  const Reiniciar = () => {
    setTimerState(0);
    setTime(5*60);
  }

  return (
    <div className="timer">
        <svg>
          <circle cx='150' cy='92' r='86' ></circle>
          <circle cx='150' cy='92' r='86' ></circle>
       </svg>
      <div className="circle">
        <div className="time"> 
          <span>{minutes.toString()}</span>
          <span>:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
      <br></br>
      <div className="btnArea" >
        <button onClick={Iniciar} className="btn">Iniciar</button>
        <button onClick={Pausar} className="btn">Pausar</button>
        <button onClick={Reiniciar} className="btn">Reiniciar</button>
      </div>

    </div>
  );
}

export default App;
