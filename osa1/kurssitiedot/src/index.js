import React from 'react'
import ReactDOM from 'react-dom'




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (prop) => {
    return <h1>{prop.course}</h1>
  }

  const Part = (prop) => {
      return <p>{prop.part} {prop.exercises}</p>
  }

  const Content = () => {
    return(
        <div>
            <Part part = {part1} exercises = {exercises1}/>
            <Part part = {part2} exercises = {exercises2}/>
            <Part part = {part3} exercises = {exercises3}/>
        </div>
    )
  }
  const Total = () => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))