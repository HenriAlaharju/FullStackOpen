import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = props => <div>{props.text} {props.value}</div>

const Statistics = (props) => {
    if (props.good + props.bad + props.neutral > 0) {
        return (
            <>
                <Statistic value={props.good} text="good" />
                <Statistic value={props.eutral} text="neutral" />
                <Statistic value={props.bad} text="bad" />
                <Statistic value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} text="average" />
                <Statistic value={100 * props.good / (props.good + props.bad + props.neutral)} text="positive" />
            </>
        )
    } else {
        return (
            <>
                <Statistic value={props.good} text="good" />
                <Statistic value={props.neutral} text="neutral" />
                <Statistic value={props.bad} text="bad" />
                <h3>No feedback given</h3>
            </>
        )
    }

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToValue = (newValue, setTo) => {
        setTo(newValue)
    }


    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setToValue(good + 1, setGood)} text="good" />
            <Button handleClick={() => setToValue(neutral + 1, setNeutral)} text="neutral" />
            <Button handleClick={() => setToValue(bad + 1, setBad)} text="bad" />
            <h1>statistics</h1>

            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)