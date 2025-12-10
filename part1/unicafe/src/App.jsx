import { useState } from 'react'

const Average = ({good, bad, neutral}) => {
  const Total = good+bad+neutral
  
  if (Total != 0) {
    return (
      (1*good+0*neutral-1*bad)/Total 
    )
  }
  return (0)
}

const Positive = ({good, bad, neutral}) => {
  const Total = good+bad+neutral
  
  if (Total != 0) {
    return (
      (good)/Total 
    )
  }
  return (0)
}

const Total = ({good, bad, neutral}) => good+bad+neutral 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1> give feedback </h1>
      <button onClick={() => setGood(good+1)}> 
        good
      </button>
      <button onClick={() => setNeutral(neutral+1)}> 
        neutral
      </button>
      <button onClick={() => setBad(bad+1)}> 
        bad
      </button>

      <h1> statistics</h1>

      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad} </p>
      <p> all <Total good={good} bad={bad} neutral={neutral} /> </p>
      <p> average <Average good={good} bad={bad} neutral={neutral} /> </p>
      <p> Positive <Positive good={good} bad={bad} neutral={neutral} /> % </p>
    </div>
  )
}

export default App