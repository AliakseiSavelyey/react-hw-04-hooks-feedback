import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Section from 'components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const selectReviev = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log(`No option called ${name}`);
        return;
    }
  };

  const total = () => good + neutral + bad;
  const percentageCounter = () => {
    const totalFeedback = total();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }
    return `${result}%`;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onSubmit={selectReviev}
        />
      </Section>
      <Section title="Statistics">
        {total() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            percentageCounter={percentageCounter()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
