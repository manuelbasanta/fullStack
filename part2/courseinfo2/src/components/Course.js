import React from "react";

const Header = props => {
  return <h2>{props.course}</h2>;
};

const Course = props => {
  console.log(props);
  let parts = props.course.parts.map((value, i) => (
    <Part
      key={"part_" + value.id}
      part={value.name}
      exercises={value.exercises}
    />
  ));
  return (
    <div>
      <Header course={props.course.name} />
      <div>{parts}</div>
      <Total parts={props.course.parts}/>
    </div>
  );
};

const Part = props => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = props => {
  const total = props.parts.reduce((acumulator, currentValue) =>
    acumulator.exercises
      ? acumulator.exercises + currentValue.exercises
      : acumulator + currentValue.exercises
  );
  return <h4>Number of exercises {total}</h4>;
};

export default Course;
