import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let parts = props.parts.map( (value,i) => <Part  key={'part_' + i} part={value.name} exercises={value.exercises} />);
    return (
        <>
            {parts}
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    const total = props.parts.reduce( (acumulator, currentValue) => acumulator.exercises ? acumulator.exercises + currentValue.exercises : acumulator + currentValue.exercises);
    return (
        <p>Number of exercises {total}</p>
    )
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
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))