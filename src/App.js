const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
       {parts.map(part => 
          <Part key={part.id} name={part.name} exercise={part.exercises} />
        )}
    </div>
  )
}

const Part = ({name, exercise}) => {
  return (
    <div>
      <p>
        {name} - {exercise}
      </p>
    </div>
  )
}

const Total = ({parts}) => {
  const value = 0
  const total = parts.reduce(
    (accumulator, part) => accumulator + part.exercises, value)
  
  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

export default App;
