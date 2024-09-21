import {
  FC,
} from 'react';
import { useForm, } from 'react-hook-form';
import { useTranslation, } from 'react-i18next';

import background from '@assets/images/login-background.jpg';

import Image from '@Components/Image';

import { Signup as SignupModel } from '../schemas/SignupSchema';

import AuthCard from '../sections/Card';

type SignupProps = object;

const Signup: FC<SignupProps> = () => {
  const { t, } = useTranslation();

  const {
    control,
  } = useForm<SignupModel>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  return (
    <section className='h-screen w-full overflow-hidden'>
      <div className='size-full flex items-center justify-center'>
      </div>
    </section>
  );
}

export default Signup;