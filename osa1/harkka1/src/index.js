import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Jussi'
  const age = 15
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Pekka" age={26} />
      <Hello name={nimi} age={age} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))