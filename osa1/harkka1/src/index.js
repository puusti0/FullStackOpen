import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
  const bornYear = () => new Date.getFullYear()-age

  return (
    <div>
      <p>Hello {name}, you're {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
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