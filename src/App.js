const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 10
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1} exercises2={part2} exercises3={part3} />
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
  return (
    <div>
       <Part part={props.part1.name} exercise={props.part1.exercises} />
       <Part part={props.part2.name} exercise={props.part2.exercises} />
       <Part part={props.part3.name} exercise={props.part3.exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} - {props.exercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises - {props.exercises1.exercises + props.exercises2.exercises + props.exercises3.exercises}</p>
    </div>
  )
}

export default App;
