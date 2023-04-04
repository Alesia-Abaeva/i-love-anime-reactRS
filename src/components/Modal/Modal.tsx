import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  return (
    <>
      <div className={styles.shadow_ovelay} onClick={onClose}></div>
      <div className={styles.modal_container}>
        <h1>{title}</h1>
        {children && children}
      </div>
    </>
  );
};
