import React from 'react'
import ReactDOM from 'react-dom'




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


    const Header = (prop) => {
        return <h1>{prop.course}</h1>
    }

    const Content = (props) => {
        const [first, second, third] = props.parts
        return (
            <div>
                <p>{first.name} {first.exercises}</p>
                <p>{second.name} {second.exercises}</p>
                <p>{third.name} {third.exercises}</p>
            </div>
        )
    }
    const Total = (props) => {
        const [first, second, third] = props.parts
        return <p>Number of exercises {first.exercises + second.exercises + third.exercises}</p>
    }

    return (
        <div>
            <Header course = {course.name} />
            <Content parts = {course.parts}/>
            <Total parts = {course.parts}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))