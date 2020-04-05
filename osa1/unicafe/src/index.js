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
      <Button onClick={props.incGood} text="good" />
      <Button onClick={props.incNeutral} text="netural" />
      <Button onClick={props.incBad} text="bad" />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / sum).toFixed(1);
  const persentage = ((props.good / sum)*100).toFixed(1);
  if (sum === 0)
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  else
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={sum} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={persentage} label="%"/>
          </tbody>
        </table>
      </div>
    )
}

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
    <td>{props.label}</td>
  </tr>
)

ReactDOM.render(<App />,
  document.getElementById('root')
)