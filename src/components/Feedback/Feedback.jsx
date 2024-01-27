import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>Good: {good}</li>
        <li className={css.feedbackItem}>Neutral: {neutral}</li>
        <li className={css.feedbackItem}>Bad: {bad} </li>
        <li className={css.feedbackItem}>Total: {total}</li>
        <li className={css.feedbackItem}>Positive: {positivePercentage}</li>
      </ul>
    </>
  );
}
