import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics
        feedbacks={[
          { text: "Good", amount: good },
          { text: "Neutral", amount: neutral },
          { text: "Bad", amount: bad },
          { text: "All", amount: bad + neutral + good },
          { text: "Average", amount: ((-bad + good) / (bad + neutral + good)).toFixed(2)},
          { text: "Positive", amount: `${((good / (bad + neutral + good)) * 100).toFixed(2)}%`}
        ]}
        total={bad + neutral + good}
      />
    </div>
  );
};

const Statistics = ({ feedbacks, total }) => {
  let ratings;
  if (total === 0) {
    ratings = <div>No feedback given</div>;
  } else {
    ratings = (
      <table>
        <tbody>
          {feedbacks.map((value, i) => (
            <Statistic
              key={"rating_" + i}
              text={value.text}
              value={value.amount}
            />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h3>Statistics</h3>
      {ratings}
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
