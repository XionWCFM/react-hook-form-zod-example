import { FormValueType } from '@/useFormContext/FormContainer';
import React, {
  HTMLAttributes,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
} from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {}

const Input = (
  { className, type = 'text', ...attributes }: InputProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <input
      type={type}
      {...attributes}
      ref={ref}
      className={`bg-green-700 rounded-lg border border-slate-400 text-white px-5 py-2 ${className}`}
    />
  );
};

export default forwardRef(Input);
