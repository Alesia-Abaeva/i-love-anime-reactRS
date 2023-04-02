import style from './Button.module.scss';

interface ButtonProps {
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ disabled }) => {
  return (
    <>
      <button className={style.button_form} type="submit" disabled={disabled} data-testid="button">
        Send
      </button>
    </>
  );
};
