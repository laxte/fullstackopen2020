import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
     courses.map((course) => {
       return (
         <Course key={course.id} course={course} />
      )
     })
  )
}

const Course = (props) => {
  const exerciseArray = props.course.parts.map( part => part.exercises)
  const total = exerciseArray.reduce((s, p) => s + p)

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

ReactDOM.render(<App />, document.getElementById('root'))
