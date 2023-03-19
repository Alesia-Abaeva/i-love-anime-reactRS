import { Component, ReactNode } from 'react';
import { Button } from './Button/Button';
import { InputText } from './Inputs/InputText';
import { InputDate } from './Inputs/InputDate';

import style from './Forms.module.scss';
import { dateValidate } from '../../utils/validate';

enum FormKeys {
  TITLE = 'title',
  DATE = 'date',
}

const validateMap: Record<FormKeys, (value: string) => boolean> = {
  [FormKeys.TITLE]: (value: string) => !value.trim().length || value.trim().length <= 2 || !value,
  [FormKeys.DATE]: dateValidate,
};

interface FormProps {
  addCard: (card: NewCard) => void;
}

interface FormState {
  title: { value: string; isError?: boolean };
  date: { value: string; isError?: boolean };
}

export class Forms extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      title: { value: '', isError: false },
      date: { value: '', isError: false },
    };
  }

  handleChange(value: string, field: FormKeys) {
    this.setState((formState) => ({ ...formState, [field]: { ...formState[field], value } }));
  }

  validate() {
    // валидация каждого поля и запись ошибки в массив ошибок errors
    // если он пуст - успешная валидация
    (Object.entries(validateMap) as [FormKeys, (value: string) => boolean][]).forEach(
      ([stateKey, validateFn]) => {
        this.setState((formState) => {
          return {
            ...formState,
            [stateKey]: {
              ...formState[stateKey],
              isError: validateFn(formState[stateKey].value),
            },
          };
        });
      }
    );
  }

  handleSendForm() {
    // вызвать валидацию формы validate()
    this.validate();
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
          {/* <input type="date" />
          <input type="checkbox" />
          <input type="radio" />
          <input type="file" /> */}
          <Button onClick={this.handleSendForm.bind(this)} />
          {/** <button onClick={this.handleSendForm.bind(this)} /> */}
        </form>
      </div>
    );
  }
}

// Интересные факты о странах
// Заголовок title
// Выберите страну country
// факт text
// дата публикации data
// уведомить других пользователей о новой статье (свичер)  //notification
//  я соглашаюсь с уловием пользования agree
// загрузить картинку uploud
