import css from './Options.module.css';

export function Options({ children, ...rest }) {
  return (
    <div {...rest} className={css.optionsContainer}>
      {children}{' '}
    </div>
  );
}

export function OptionButton({ option, onClick, children, ...rest }) {
  return (
    <button onClick={() => onClick(option)} className={css.buttonOptions} {...rest}>
      {children}
    </button>
  );
}
