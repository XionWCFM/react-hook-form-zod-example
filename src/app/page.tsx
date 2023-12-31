import LoginForm from '@/loginForm/LoginForm';
import RefForm from '@/loginForm/RefForm';
import FormContainer from '@/useFormContext/FormContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormContainer />
      <RefForm />
      <LoginForm />
    </main>
  );
}
