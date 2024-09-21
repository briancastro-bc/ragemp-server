import {
  FC,
  memo,
  useCallback,
} from 'react';
import { useTranslation, } from 'react-i18next';
import { 
  useForm, 
  Controller, 
  SubmitHandler, 
} from 'react-hook-form';
import { useNavigate, } from 'react-router-dom';
import { zodResolver, } from '@hookform/resolvers/zod';

import Lock from '@mui/icons-material/Lock';
import Login from '@mui/icons-material/Login';
import ArrowBack from '@mui/icons-material/ArrowBack';

import {
  Input,
  Button,
  Typography,
} from '@theme/main';

import { Step, } from '@Layout/StepperLayout';
import { Password, PasswordSchema } from '@src/apps/Auth/schemas/LoginSchema';

type LoginPasswordStepProps = object & Step;

const LoginPasswordStep: FC<LoginPasswordStepProps> = ({
  onActionTriggered,
}) => {
  const navigate = useNavigate();
  const { t, } = useTranslation();

  const {
    control,
    formState: { 
      isValid, 
      isLoading, 
      isValidating, 
      isSubmitting, 
    },
    handleSubmit,
  } = useForm<Password>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: '',
    },
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const isFormInValidationOrLoadingStatus: () => boolean = useCallback(() => {
    return isLoading || isValidating || isSubmitting;
  }, [isLoading, isValidating, isSubmitting,])

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='flex flex-col gap-y-1'>
        <Typography
          variant='h3'
          className='text-4xl font-platypi font-medium leading-[52px] text-black'>
          {t('login.welcome', { username: '' })}
          <span className='animate-bounce font-bold text-primary-alt-main'>
            {'Brian Rollins'}
          </span>
        </Typography>
        <div className='mt-0'>
          <Typography
            variant='body1'
            className='font-poppins text-dark-600'>
            {t('login.helperText-2')}
          </Typography>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 mt-12'>
        <Controller
          render={({ field, }) => (
            <Input
              {...field}
              type='password'
              label={t('login.password.label')}
              placeholder={t('login.password.placeholder')}
              icon={<Lock />} />
          )}
          control={control}
          name='password' />
        <div className='mb-0 flex items-center'>
          <Typography
            variant='body1'
            className='text-sm underline ml-auto pl-2'
            role='link'>
            {t('login.forgotPassword')}
          </Typography>
        </div>
        <div className='w-full ml-auto grow flex items-center gap-x-2'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => onActionTriggered('previous')}
            className='px-4'>
            <ArrowBack/>
          </Button>
          <Button
            disabled={!isValid || isFormInValidationOrLoadingStatus()}
            loading={isFormInValidationOrLoadingStatus()}
            variant='contained'
            onClick={handleSubmit(onSubmit)}
            className='w-full'
            endIcon={<Login/>}>
            {t('common.buttons.login')}
          </Button>
        </div>
      </div>
    </>
  )
};

const MemorizeLoginPasswordStep = memo(LoginPasswordStep);

export default MemorizeLoginPasswordStep;