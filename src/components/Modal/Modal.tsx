import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <div className={styles.shadow_ovelay} onClick={onClose}></div>
      <div className={styles.modal_container}>
        <h1>Hoooray data send!</h1>
      </div>
    </>
  );
};
