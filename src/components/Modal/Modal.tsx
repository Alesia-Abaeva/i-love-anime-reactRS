import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <div className={styles.shadow_overlay} onClick={onClose}>
      <div className={styles.modal_container} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modal_wrapper}>
          <h1>{title}</h1>
          <button className={styles.btn_close} onClick={onClose}></button>

          {children}
        </div>
      </div>
    </div>
  );
};
