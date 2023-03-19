import { Component, ReactNode } from 'react';
import { Button } from './Button/Button';
import { InputText } from './Inputs/InputText';
import './Forms.css';

enum FormKeys {
  TITLE = 'title',
}

const validateMap: Record<FormKeys, (value: string) => boolean> = {
  [FormKeys.TITLE]: (value: string) => !value.trim().length || value.trim().length <= 2,
};

interface FormProps {
  addCard: (card: NewCard) => void;
}

interface FormState {
  title: { value: string; isError?: boolean };
  // title: boolean;
}

export class Forms extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      title: { value: '', isError: false },
      // title: true,
    };
  }

  handleChange(value: string) {
    this.setState({ title: { value } });
  }

  handlerValidate(isValidate: boolean) {
    this.setState({ title: { ...this.state.title, isError: isValidate } });
  }

  validate() {
    const errors = [];

    // валидация каждого поля и запись ошибки в массив ошибок errors
    // если он пуст - успешная валидация
    (Object.entries(validateMap) as [FormKeys, (value: string) => boolean][]).forEach(
      ([stateKey, validateFn]) => {
        this.setState({
          [stateKey]: {
            ...this.state[stateKey],
            isError: validateFn(this.state[stateKey].value),
          },
        });
      }
    );

    return !!errors.length;
  }

  handleSendForm() {
    // вызвать валидацию формы validate()
    this.validate();
    // успех - отправить, неуспех - ошибка
  }

  render(): ReactNode {
    return (
      <div className="main_form container">
        <form>
          <InputText onChange={this.handleChange.bind(this)} validate={!this.state.title.isError} />
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
