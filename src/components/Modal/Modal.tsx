import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <>
      <div className={styles.shadow_ovelay} onClick={onClose}>
        <div className={styles.modal_container}>
          <div className={styles.modal_wrapper}>
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
