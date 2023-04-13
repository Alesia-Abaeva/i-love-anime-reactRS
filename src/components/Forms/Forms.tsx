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
import { dateValidate, textDescValidate, textValidate } from '../../utils/validate';
import {
  setCheck,
  setDescription,
  setDate,
  setFile,
  setRadio,
  setSelect,
  setTitle,
  setFormState,
  setButtonDisabled,
} from '../../store/reducers/FormSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formValueSelector } from '../../store/selectors/form';

interface FormProps {
  addCard: (card: NewCard) => void;
  showModal: (isActive: boolean) => void;
}

export const Forms: React.FC<FormProps> = ({ addCard, showModal }) => {
  const formState1 = useAppSelector(formValueSelector);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm<NewCard>({
    defaultValues: formState1,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleSendForm: SubmitHandler<NewCard> = (data) => {
    const blobFiles = URL.createObjectURL((data.file as FileList)[0] as Blob);
    const value = getValues();
    addCard({ ...value, file: blobFiles });
    showModal(true);
    dispatch(setFormState(defaultValues));
    reset();
  };

  React.useEffect(() => {
    const subscribe = watch((value) =>
      dispatch(setButtonDisabled(Object.values(value).every((inputs) => !inputs)))
    );
    return () => subscribe.unsubscribe();
  }, [watch, dispatch]);

  return (
    <div className={style.form_container}>
      <form onSubmit={handleSubmit(handleSendForm)}>
        <InputText
          validate={errors.title}
          register={register(FormKeys.TITLE, {
            onChange: (e) => {
              dispatch(setTitle(e.target.value));
            },
            required: VALIDATE_MESSAGE.title,
            validate: (value) => textValidate(value as string) || VALIDATE_MESSAGE.title,
          })}
        />
        <TextArea
          validate={errors.description}
          register={register(FormKeys.DESCRIPTIONS, {
            onChange: (e) => {
              dispatch(setDescription(e.target.value));
            },
            required: VALIDATE_MESSAGE.description,
            validate: (value) => textDescValidate(value as string) || VALIDATE_MESSAGE.description,
          })}
        />
        <InputSelect
          validate={errors.select}
          register={register(FormKeys.SELECT, {
            required: VALIDATE_MESSAGE.select,
            onChange: (e) => {
              dispatch(setSelect(e.target.value));
            },
          })}
        />
        <div className={style.form_wrapper_date}>
          <InputDate
            validate={errors.date}
            register={register(FormKeys.DATE, {
              required: VALIDATE_MESSAGE.date,
              validate: (value) => dateValidate(value as string) || VALIDATE_MESSAGE.date,
              onChange: (e) => {
                dispatch(setDate(e.target.value));
              },
            })}
          />
          <InputFile
            validate={errors.file}
            register={register(FormKeys.FILE, {
              required: VALIDATE_MESSAGE.file,
              onChange: (e) => {
                dispatch(setFile(e.target.value));
              },
            })}
          />
        </div>

        <InputRadio
          validate={errors.radio}
          register={register(FormKeys.RADIO, {
            required: VALIDATE_MESSAGE.radio,
            onChange: (e) => {
              dispatch(setRadio(e.target.value));
            },
          })}
        />

        <InputCheckbox
          validate={errors.check}
          register={register(FormKeys.CHECK, {
            required: VALIDATE_MESSAGE.check,
            onChange: (e) => {
              dispatch(setCheck(e.target.value));
            },
          })}
        />
        <Button disabled={formState1.buttonDisabled} />
      </form>
    </div>
  );
};
