import React from 'react'

const Course = (props) => {
  const exercises = props.course.parts.map( part => part.exercises)
  const total = exercises.reduce((s, p) => s + p)

  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total  total={total} />
      </div>
  )
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part => {
      return (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )
    })
  )
}

const Part = (props) => (
  <p>
  {props.name} {props.exercises}
</p>
)

const Total = (props) => (
  <h3>Total of exercises {props.total}</h3>
)

export default Course