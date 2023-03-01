const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
      exercises: 10
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
       <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
       <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
       <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} - {props.exercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises - {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

export default App;
