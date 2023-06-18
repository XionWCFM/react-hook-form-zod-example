'use client';
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from 'react-hook-form';
import React from 'react';
import NestedInput from './NestedInput';

export interface FormValueType {
  id: string;
  password: string;
}

interface FormContainerProps {}

const FormContainer = ({}: FormContainerProps) => {
  const methods = useForm<FormValueType>();
  const onSubmit: SubmitHandler<FormValueType> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-slate-400">
        <NestedInput registerKey={'id'} />
        <NestedInput registerKey={'password'} />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default FormContainer;
