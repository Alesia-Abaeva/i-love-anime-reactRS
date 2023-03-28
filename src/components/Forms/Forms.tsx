import { Component, createRef, MouseEvent, ReactNode, RefObject } from 'react';
import { Button } from './Button/Button';
import style from './Forms.module.scss';
import { initialStateForm } from '../../const/initial-state-form';
import { FormKeys, validateMap } from '../../const/validate-form-keys';
import {
  InputCheckbox,
  InputDate,
  InputFile,
  InputRadio,
  InputSelect,
  InputText,
  TextArea,
} from './Inputs';

interface FormProps {
  addCard: (card: NewCard) => void;
  showModal: (isActive: boolean) => void;
}

export interface FormState {
  title: { value: string; isError?: boolean };
  descriprion: { value: string; isError?: boolean };
  date: { value: string; isError?: boolean };
  file: { value: string; isError?: boolean };
  select: { value: string; isError?: boolean };
  check: { value: string; isError?: boolean };
  radio: { value: string; isError?: boolean };
}

export class Forms extends Component<FormProps, FormState> {
  formRef: RefObject<HTMLFormElement>;

  constructor(props: FormProps) {
    super(props);
    this.formRef = createRef();

    this.state = {
      title: { value: '', isError: false },
      descriprion: { value: '', isError: false },
      date: { value: '', isError: false },
      file: { value: '', isError: false },
      select: { value: '', isError: false },
      check: { value: '', isError: false },
      radio: { value: '', isError: false },
    };
  }

  handleChange(value: string, field: FormKeys) {
    this.setState((formState) => ({ ...formState, [field]: { ...formState[field], value } }));
  }

  validate() {
    const prevState = this.state;

    const newState = (
      Object.entries(validateMap) as [FormKeys, (value: string) => boolean][]
    ).reduce<FormState>((stateAcc, [stateKey, validateFn]) => {
      const hasError = validateFn(prevState[stateKey].value);

      if (hasError) {
        const formElement = this.formRef.current!.elements.namedItem(stateKey) as
          | HTMLTextAreaElement
          | HTMLInputElement
          | HTMLSelectElement;
        formElement && (formElement.value = '');
      }

      return {
        ...stateAcc,
        [stateKey]: {
          ...prevState[stateKey],
          isError: hasError,
        },
      };
    }, {} as FormState);

    this.setState(newState);

    return Object.values(newState).every(({ isError }) => !isError);
  }

  resetForm() {
    const formElement = this.formRef.current;

    formElement?.reset();

    this.setState((prev) => ({ ...prev, ...initialStateForm }));
  }

  showModal() {
    return Object.values(this.state).every(({ isError }) => !isError);
  }

  handleSendForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const isEmptyErrors = this.validate();
    if (isEmptyErrors) {
      const data: NewCard = Object.fromEntries(
        Object.entries(this.state).map(([key, props]) => {
          return [key, props.value];
        })
      );

      this.props.addCard(data);
      this.resetForm();
      this.props.showModal(true);
    }
  }

  render(): ReactNode {
    return (
      <div className={style.main_form}>
        <form ref={this.formRef}>
          <InputText
            onChange={(value) => this.handleChange(value, FormKeys.TITLE)}
            validate={!this.state.title.isError}
          />
          <TextArea
            onChange={(value) => this.handleChange(value, FormKeys.DECSRIPTIONS)}
            validate={!this.state.descriprion.isError}
          />
          <InputDate
            onChange={(value) => this.handleChange(value, FormKeys.DATE)}
            validate={!this.state.date.isError}
          />
          <InputSelect
            onChange={(value) => this.handleChange(value, FormKeys.SELECT)}
            validate={!this.state.select.isError}
          />
          <InputRadio
            onChange={(value) => this.handleChange(value, FormKeys.RADIO)}
            validate={!this.state.radio.isError}
          />
          <InputFile
            onChange={(value) => this.handleChange(value, FormKeys.FILE)}
            validate={!this.state.file.isError}
          />
          <InputCheckbox
            onChange={(value) => this.handleChange(value, FormKeys.CHECK)}
            validate={!this.state.check.isError}
          />
          <Button
            onClick={this.handleSendForm.bind(this)}
            disabled={Object.values(this.state).every(({ value }) => !value)}
          />
        </form>
      </div>
    );
  }
}
