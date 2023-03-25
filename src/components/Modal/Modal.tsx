import { Component } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
}

export class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.shadow_ovelay} onClick={this.props.onClose}></div>
        <div className={styles.modal_container}>
          <h1>Hoooray data send!</h1>
        </div>
      </>
    );
  }
}
