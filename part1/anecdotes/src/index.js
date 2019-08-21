import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    new Array(props.anecdotes.length + 1)
      .join("0")
      .split("")
      .map(parseFloat)
  );

  const addVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <TotalVotes votes={points[selected]}/>
      <VoteButton handleClick={addVote} />
      <RandomAnecdote handleClick={setSelected} totalAnecdotes={props.anecdotes.length} />
      <MostVotes anecdote={props.anecdotes[points.indexOf(Math.max(...points))]}/>
      <TotalVotes votes={Math.max(...points)}/>
    </div>
  );
};

const RandomAnecdote = ({ handleClick, totalAnecdotes }) => {
  const getRandomNumber = () => Math.floor(Math.random() * totalAnecdotes);
  return (
    <button onClick={() => handleClick(getRandomNumber())}>
      Random anecdote
    </button>
  );
};

const VoteButton = ({ handleClick }) => {
  return <button onClick={() => handleClick()}> Vote</button>;
};

const TotalVotes = ({votes}) => {
    return <div>Has {votes} votes</div>
}

const MostVotes = ({anecdote}) => {
    return (
        <div>
            <h3>Anecdote with most votes</h3>
            <div>{anecdote}</div>
        </div>
    )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
