import {
  FC,
  memo,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import { useTranslation, } from 'react-i18next';
import { 
  useForm, 
  Controller, 
  SubmitHandler, 
} from 'react-hook-form';
import { zodResolver, } from '@hookform/resolvers/zod';

import User from '@mui/icons-material/Person';

import {
  Input,
  Button,
  Checkbox,
  Typography,
} from '@theme/main';

import { Step, } from '@Layout/StepperLayout';
import { Username, UsernameSchema, } from '@src/apps/Auth/schemas/LoginSchema';

type LoginUsernameStepProps = object & Step;

const LoginUsernameStep: FC<LoginUsernameStepProps> = ({
  onActionTriggered,
}) => {
  const { t, } = useTranslation();
  const navigate = useNavigate();

  const sequenceRef = useRef<HTMLSpanElement | null>(null);
  const sequenceIntervalRef = useRef<number | null>(null);

  const sequence = useMemo(
    () => t('login.sequence'), [t,]
  );

  const {
    control,
    formState: { 
      isValid, 
      isLoading, 
      isValidating, 
      isSubmitting, 
    },
    handleSubmit,
  } = useForm<Username>({
    resolver: zodResolver(UsernameSchema),
    defaultValues: {
      username: '',
      remember: false,
    },
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const isFormInValidationOrLoadingStatus: () => boolean = useCallback(() => {
    return isLoading || isValidating || isSubmitting;
  }, [isLoading, isValidating, isSubmitting,])

  const onSubmit: SubmitHandler<Username> = (data) => {
    console.log(data);

    onActionTriggered('next');
  };

  useEffect(() => {
    if (!sequenceRef.current) return;

    let index = 1;
    sequenceIntervalRef.current = window.setInterval(() => {
      if (index > sequence.length - 1) index = 0;

      sequenceRef.current!.textContent = `${sequence[index]}`;

      index++;
    }, 2000);

    return () => {
      if (sequenceIntervalRef?.current)
        clearInterval(sequenceIntervalRef?.current);
    };
  }, [sequence,]);

  return (
    <>
      <div className='flex flex-col gap-y-1'>
        <div className='text-center'>
          <Typography
            variant='h2'
            className='font-gta-2 font-bold text-6xl leading-10 text-primary-alt-main'>
            {t('login.greeting')}
          </Typography>
          {/* <Typography
            variant='h3'
            className='font-gta-2 font-medium text-3xl text-black'>
            {t('login.greeting-2')}
            <span
              ref={sequenceRef}
              className='animate-bounce font-bold text-primary-alt-main'>
              {sequence[0]}
            </span>
          </Typography> */}
          <div className='mt-6 flex items-center justify-center gap-x-1'>
            <Typography
              variant='body1'
              className='font-poppins text-dark-600'>
              {t('login.helperText')}
            </Typography>
            <Typography
              role='link'
              variant='body1'
              className='font-poppins font-semibold text-primary-main hover:cursor-pointer hover:text-primary-alt-main'
              onClick={() => location.hash = '#signup'}>
              {t('login.signup')}
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 mt-6'>
        <Controller
          render={({ field, }) => (
            <Input
              {...field}
              label={t('login.username.label')}
              placeholder={t('login.username.placeholder')}
              icon={<User />} />
          )}
          control={control}
          name='username' />
        <div className='mb-0 flex items-center'>
          <Controller
            render={({ field, }) => (
              <Checkbox
                {...field}
                label={t('login.remember.label')} />
            )}
            control={control}
            name='remember' />
        </div>
        <div className='ml-auto grow'>
          <Button
            disabled={!isValid || isFormInValidationOrLoadingStatus()}
            loading={isFormInValidationOrLoadingStatus()}
            variant='contained'
            onClick={handleSubmit(onSubmit)}>
            {t('common.buttons.next')}
          </Button>
        </div>
      </div>
    </>
  )
};

const MemorizeLoginUsernameStep = memo(LoginUsernameStep);

export default MemorizeLoginUsernameStep;