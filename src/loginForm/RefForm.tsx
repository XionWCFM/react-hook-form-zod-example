'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

interface RefFormProps {}

const RefForm = ({}: RefFormProps) => {
  const {} = useForm();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form action="">
        <Input ref={inputRef} name="disf" />
      </form>
      <button onClick={() => console.log(inputRef.current)}>확인해보기</button>
    </div>
  );
};

export default RefForm;
