import { useState, useEffect } from 'react';
import './App.css';
import Description from '../Description/Description.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';
import { OptionButton, Options } from '../Options/Options.jsx';

export default function App() {
  const initialFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getSavedFeedback = () => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : initialFeedbackState;
  };

  const [feedback, setFeedback] = useState(getSavedFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateCount = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const reset = () => {
    setFeedback(initialFeedbackState);
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) + '%' : '0%';

  return (
    <div>
      <Description />


      <Options>
            <OptionButton onClick={() => updateCount('good')} option="good">
              Good
            </OptionButton>
            <OptionButton onClick={() => updateCount('neutral')} option="neutral">
              Neutral
            </OptionButton>
            <OptionButton onClick={() => updateCount('bad')} option="bad">
              Bad
            </OptionButton>
            {total > 0 && (
              <OptionButton onClick={reset}>Reset</OptionButton>
            )}
      </Options>


      <Notification
        message={total === 0 ? 'No feedback yet.' : null}
      />
      {total > 0 && (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}