import React from 'react'

const Header = props =>
    <h1>{props.course}</h1>

const Total = props => {
    const total = props.parts.map(part => part.exercises).reduce((s, p) => { return (s + p) })

    return <h4>yhteensä {total} tehtävää</h4>
}

const Course = props => {
    return (
        <div>
            <Header course={props.course} />
            <Content parts={props.parts} />
            <Total parts={props.parts} />
        </div>
    )
}

const Part = props =>
    <p>{props.part.name} {props.part.exercises}</p>

const Content = props => {
    console.log(props.parts)
    return props.parts.map(part => <Part key={part.name} part={part} />)
}

export default Course