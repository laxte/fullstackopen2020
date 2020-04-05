import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => {
    setGood(good + 1)
  }

  const incBad = () => {
    setBad(bad + 1)
  }

  const incNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Feedback incGood={incGood} incBad={incBad} incNeutral={incNeutral} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={props.incGood}>good</button>
      <button onClick={props.incNeutral}>netural</button>
      <button onClick={props.incBad}>bad</button>
    </div>
  )
}

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / sum
  return (
    <div>
      <h1>statisticsk</h1>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {sum}</div>
      <div>average {average}</div>
      <div>positive {props.good / sum}</div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)