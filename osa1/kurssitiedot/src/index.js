import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>

const Content = (props) => {
  const paragraphs = props.parts.map(value => <Part name={value.name} exercises={value.exercises}/>) 
  
  return paragraphs
}

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Total = (props) => {
  let sum = 0
  props.parts.forEach(element => sum = sum + element.exercises)
  
  return <p>Numeber of exercises {sum}</p>
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))