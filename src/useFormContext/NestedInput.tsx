'use client';
import React, { ComponentPropsWithRef } from 'react';
import { FormValueType } from './FormContainer';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/Input';

interface NestedInputProps extends ComponentPropsWithRef<'input'> {
  registerKey: keyof FormValueType;
}

const NestedInput = ({ registerKey, ...attributes }: NestedInputProps) => {
  const { register } = useFormContext<FormValueType>();

  return (
    <div className=" py-6 px-4 bg-sky-400">
      <input type="text" {...register(registerKey)} {...attributes} />
    </div>
  );
};

export default NestedInput;
