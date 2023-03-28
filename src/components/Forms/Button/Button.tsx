import style from './Button.module.scss';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <>
      <button
        className={style.button_form}
        onClick={onClick}
        type="submit"
        disabled={disabled}
        data-testid="button"
      >
        Send
      </button>
    </>
  );
};
