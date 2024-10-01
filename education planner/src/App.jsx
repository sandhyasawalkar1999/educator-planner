import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Planner from './components/planner/planner'

function App() {
 
  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState(0);

  const addGeekster = ()=>
  {
      console.log('addgeekster cliocked');
  };
 


    return(
      <>
      < Planner />
      </>
    )

}

export default App
