'use client';
import Input from '@/components/Input';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

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
