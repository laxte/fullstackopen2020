import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])
  
  const zeroInitializedArray = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0)
  if (votes.length === 0) {
    setVotes(zeroInitializedArray)
  }

  const setSelectedToRandom = () => {
    const random = Math.floor(Math.random() * props.anecdotes.length) 
    setSelected(random)
  }
  
  const voteOnSelected = () => {
    const copy = [ ...votes ]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
      <Button onClick={voteOnSelected} text="vote"/>
      <Button onClick={setSelectedToRandom} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[mostVotedIndex]}</div>
      <div>Has {votes[mostVotedIndex]} votes</div>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)