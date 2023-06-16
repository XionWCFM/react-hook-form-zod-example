'use client';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

interface LoginFormProps {}

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

const LoginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'This field has to be filled' })
      .email({ message: 'Invalid email address' }),
    name: z.string().min(2).max(10),
    password: z.string().min(8),
    checkPassword: z.string().min(8),
    phone: z.string().regex(phoneRegex, 'Invalid PhoneNumber'),
  })
  .superRefine(({ checkPassword, password }, ctx) => {
    if (checkPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'password not matched',
        path: ['checkPassword'],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'password not matched',
        path: ['password'],
      });
    }
  });

type LoginType = z.infer<typeof LoginSchema>;

const LoginForm = ({}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });
  return (
    <div className=" flex flex-col bg-sky-600">
      <h2 className=" text-white">이쨰륀</h2>
      <form
        className=" flex flex-col"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div>
          <label>이메일</label>
          <input
            type="text"
            {...register('email', {
              onChange: (e) => console.log(e.target.value),
            })}
            placeholder=" email"
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </div>
        <div>
          <label htmlFor="">이름</label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" {...register('password')} />
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </div>
        <div>
          <label htmlFor="">비밀번호확인</label>
          <input type="password" {...register('checkPassword')} />
          {errors.checkPassword?.message && (
            <span>{errors.checkPassword?.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">폰번호</label>
          <input type="text" {...register('phone')} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
