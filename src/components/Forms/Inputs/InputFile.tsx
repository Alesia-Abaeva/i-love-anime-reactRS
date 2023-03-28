import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import styles from './Input.module.scss';
import { errorMessageTitile, FormKeys, titleForms } from '../../../const';

export const InputFile: React.FC<InputProps> = ({ validate, onChange }) => {
  const handlerChange = (fileInput: FileList | null) => {
    const files = URL.createObjectURL((fileInput as FileList)[0] as Blob);
    onChange(files ?? '');
  };

  return (
    <div className={styles.item_input}>
      <label htmlFor={FormKeys.FILE} className={styles.input_title}>
        {titleForms.file}
      </label>
      <input
        type="file"
        className={`${styles.input_text} ${styles.input_file} ${!validate ? styles.error : ''}`}
        accept={'.jpg,.jpeg,.png'}
        onChange={(event) => handlerChange(event.target.files)}
        id={FormKeys.FILE}
        data-testid={FormKeys.FILE}
      />

      <ErrorMessage validate={validate} errorMessage={errorMessageTitile.file} />
    </div>
  );
};
