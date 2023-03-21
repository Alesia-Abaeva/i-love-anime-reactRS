import { Component, MouseEvent, ReactNode } from 'react';
import { Button } from './Button/Button';
import { InputText } from './Inputs/InputText';
import { InputDate } from './Inputs/InputDate';

import style from './Forms.module.scss';
import { dateValidate, fileValidate, textValidate } from '../../utils/validate';
import { InputFile } from './Inputs/InputFile';
import { InputSelect } from './Inputs/InputSelect';
import { InputCheckbox } from './Inputs/InputCheckbox';
import { InputRadio } from './Inputs/InputRadio';

enum FormKeys {
  TITLE = 'title',
  DATE = 'date',
  FILE = 'file',
  SELECT = 'select',
  CHECK = 'check',
  RADIO = 'radio',
}

const validateMap: Record<FormKeys, (value: string) => boolean> = {
  [FormKeys.TITLE]: textValidate,
  [FormKeys.DATE]: dateValidate,
  [FormKeys.FILE]: fileValidate,
  [FormKeys.SELECT]: fileValidate,
  [FormKeys.CHECK]: fileValidate,
  [FormKeys.RADIO]: fileValidate,
};

interface FormProps {
  addCard: (card: NewCard) => void;
}

interface FormState {
  title: { value: string; isError?: boolean };
  date: { value: string; isError?: boolean };
  file: { value: string; isError?: boolean };
  select: { value: string; isError?: boolean };
  check: { value: string; isError?: boolean };
  radio: { value: string; isError?: boolean };
  error: boolean[];
}

export class Forms extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      title: { value: '', isError: false },
      date: { value: '', isError: false },
      file: { value: '', isError: false },
      select: { value: '', isError: false },
      check: { value: '', isError: false },
      radio: { value: '', isError: false },
      error: [],
    };
  }

  handleChange(value: string, field: FormKeys) {
    this.setState((formState) => ({ ...formState, [field]: { ...formState[field], value } }));
  }

  validate() {
    const arrayError: boolean[] = [];
    this.setState({ error: [] });
    // валидация каждого поля и запись ошибки в массив ошибок errors
    // если он пуст - успешная валидация
    // TODO: почему несколько раз пушится стейт???
    (Object.entries(validateMap) as [FormKeys, (value: string) => boolean][]).forEach(
      ([stateKey, validateFn]) => {
        this.setState((formState) => {
          validateFn(formState[stateKey].value) &&
            arrayError.push(validateFn(formState[stateKey].value));
          return {
            ...formState,
            [stateKey]: {
              ...formState[stateKey],
              isError: validateFn(formState[stateKey].value),
            },
            error: [...formState.error, ...arrayError],
          };
        });
      }
    );
  }

  handleSendForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.validate();
    // TODO: как будет валидироваться?

    const array = Object.entries(this.state)
      .map(([key, props]) => {
        if (typeof props === 'object' && !Array.isArray(props)) {
          return [key, props.value];
        }
      })
      .filter((el) => el !== undefined) as string[][];

    const valideData = Object.fromEntries(array);

    this.props.addCard(valideData);

    // успех - отправить, неуспех - ошибка
  }

  render(): ReactNode {
    return (
      <div className={style.main_form}>
        <form>
          <InputText
            onChange={(value) => this.handleChange(value, FormKeys.TITLE)}
            validate={!this.state.title.isError}
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

          <Button onClick={this.handleSendForm.bind(this)} disabled={!this.state.error.length} />
        </form>
      </div>
    );
  }
}

// Интересные факты о странах
// Заголовок title
// Выберите страну country
// факт text
// дата публикации data дата утверждения флага
// уведомить других пользователей о новой статье (свичер)  //notification
//  я соглашаюсь с уловием пользования agree
// загрузить картинку uploud
// является ли флаг официальным?
