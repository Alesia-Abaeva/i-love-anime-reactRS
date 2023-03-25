import { Component } from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  validate: boolean | undefined;
  errorMessage: string;
}

export class ErrorMessage extends Component<ErrorMessageProps> {
  constructor(props: ErrorMessageProps) {
    super(props);
  }

  render() {
    return (
      <span className={`${styles.error_title} ${!this.props.validate ? styles.error_active : ''}`}>
        {!this.props.validate && this.props.errorMessage}
      </span>
    );
  }
}
