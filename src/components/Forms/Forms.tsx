import { defaultValues, FormKeys, VALIDATE_MESSAGE } from '../../const';
import React from 'react';
import { Button } from './Button/Button';
import style from './Forms.module.scss';
import {
  InputCheckbox,
  InputDate,
  InputFile,
  InputRadio,
  InputSelect,
  InputText,
  TextArea,
} from './Inputs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dateValidate, textDescrValidate, textValidate } from '../../utils/validate';

interface FormProps {
  addCard: (card: NewCard) => void;
  showModal: (isActive: boolean) => void;
}

export const Forms: React.FC<FormProps> = ({ addCard, showModal }) => {
  const [isDidabled, setDisable] = React.useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm<NewCard>({
    defaultValues: defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleSendForm: SubmitHandler<NewCard> = (data) => {
    const blobFiles = URL.createObjectURL((data.file as FileList)[0] as Blob);
    const value = getValues();

    addCard({ ...value, file: blobFiles });
    showModal(true);
    reset();
  };

  React.useEffect(() => {
    const subscribe = watch((value) => setDisable(Object.values(value).every((inputs) => !inputs)));
    return () => subscribe.unsubscribe();
  }, [watch]);

  return (
    <div className={style.main_form}>
      <form onSubmit={handleSubmit(handleSendForm)}>
        <InputText
          validate={errors.title}
          register={register(FormKeys.TITLE, {
            required: VALIDATE_MESSAGE.title,
            validate: (value) => textValidate(value as string) || VALIDATE_MESSAGE.title,
          })}
        />
        <TextArea
          validate={errors.descriprion}
          register={register(FormKeys.DECSRIPTIONS, {
            required: VALIDATE_MESSAGE.descriprion,
            validate: (value) => textDescrValidate(value as string) || VALIDATE_MESSAGE.descriprion,
          })}
        />
        <InputDate
          validate={errors.date}
          register={register(FormKeys.DATE, {
            required: VALIDATE_MESSAGE.date,
            validate: (value) => dateValidate(value as string) || VALIDATE_MESSAGE.date,
          })}
        />
        <InputSelect
          validate={errors.select}
          register={register(FormKeys.SELECT, { required: VALIDATE_MESSAGE.select })}
        />
        <InputRadio
          validate={errors.radio}
          register={register(FormKeys.RADIO, { required: VALIDATE_MESSAGE.radio })}
        />
        <InputFile
          validate={errors.file}
          register={register(FormKeys.FILE, { required: VALIDATE_MESSAGE.file })}
        />
        <InputCheckbox
          validate={errors.check}
          register={register(FormKeys.CHECK, { required: VALIDATE_MESSAGE.check })}
        />
        <Button disabled={isDidabled} />
      </form>
    </div>
  );
};
