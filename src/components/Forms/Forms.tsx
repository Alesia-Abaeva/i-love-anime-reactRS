import { Component, MouseEvent, ReactNode } from 'react';
import { Button } from './Button/Button';
import { InputText } from './Inputs/InputText';
import { InputDate } from './Inputs/InputDate';

import style from './Forms.module.scss';
import { dateValidate, fileValidate, textDescrValidate, textValidate } from '../../utils/validate';
import { InputFile } from './Inputs/InputFile';
import { InputSelect } from './Inputs/InputSelect';
import { InputCheckbox } from './Inputs/InputCheckbox';
import { InputRadio } from './Inputs/InputRadio';
import { TextArea } from './Inputs/TextArea';

export enum FormKeys {
  TITLE = 'title',
  DATE = 'date',
  FILE = 'file',
  SELECT = 'select',
  CHECK = 'check',
  RADIO = 'radio',
  DECSRIPTIONS = 'descriprion',
}

const validateMap: Record<FormKeys, (value: string) => boolean> = {
  [FormKeys.TITLE]: textValidate,
  [FormKeys.DATE]: dateValidate,
  [FormKeys.FILE]: fileValidate,
  [FormKeys.SELECT]: fileValidate,
  [FormKeys.CHECK]: fileValidate,
  [FormKeys.RADIO]: fileValidate,
  [FormKeys.DECSRIPTIONS]: textDescrValidate,
};
// TODO: проверить валидацию

interface FormProps {
  addCard: (card: NewCard) => void;
}

interface FormState {
  title: { value: string; isError?: boolean };
  descriprion: { value: string; isError?: boolean };
  date: { value: string; isError?: boolean };
  file: { value: string; isError?: boolean };
  select: { value: string; isError?: boolean };
  check: { value: string; isError?: boolean };
  radio: { value: string; isError?: boolean };
  // error: boolean[];
}

export class Forms extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
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
    // валидация каждого поля и запись ошибки в массив ошибок errors
    // если он пуст - успешная валидация
    // TODO: почему несколько раз пушится стейт???
    const prevState = this.state;

    const newState = (
      Object.entries(validateMap) as [FormKeys, (value: string) => boolean][]
    ).reduce<FormState>((stateAcc, [stateKey, validateFn]) => {
      const hasError = validateFn(prevState[stateKey].value);

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

  handleSendForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const isEmptyErrors = this.validate();
    console.log(isEmptyErrors);

    if (isEmptyErrors) {
      const array = Object.entries(this.state).map(([key, props]) => {
        return [key, props.value];
      });
      // string[][]

      const verifyData: NewCard = Object.fromEntries(array);

      this.props.addCard(verifyData);

      // очищать стейт
    }

    // TODO: как будет валидироваться?
    // Добавление карточки

    // успех - отправить, неуспех - ошибка
  }

  render(): ReactNode {
    return (
      <div className={style.main_form}>
        <form>
          {/* TODO: очищять форму если она невалидная */}
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
