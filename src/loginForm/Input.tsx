import React, {
  HTMLAttributes,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
} from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {}

const Input = ({ ...attributes }: InputProps, ref: Ref<HTMLInputElement>) => {
  return <input type="text" {...attributes} ref={ref} />;
};

export default forwardRef(Input);
