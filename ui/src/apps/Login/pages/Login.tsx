import {
  FC,
  useState,
} from 'react';
import { useTranslation, } from 'react-i18next';

import {
  Button,
  Typography,
} from '@theme/main';

import background from '@assets/images/background-2.webp';

import Image from '@Components/Image';
import StepperLayout from '@Layout/StepperLayout';

type LoginProps = object;

const Login: FC<LoginProps> = () => {
  const { t, } = useTranslation();

  const [currentStep, setCurrentStep,] = useState<number>(0);

  return (
    <section className='h-screen w-full overflow-hidden'>
      <div className="size-full flex items-center justify-center">
        <article className='h-[768px] w-[1024px] rounded-lg bg-white shadow-sm border border-dark-200'>
          <div className='size-full flex rounded-[inherit]'>
            <div className='relative h-auto w-full max-w-[320px] rounded-[inherit]'>
              <div className='absolute h-full rounded-[inherit]'>
                <Image
                  file={{
                    src: background
                  }}
                  alt={'Representative login background'}
                  className='h-full w-full object-cover rounded-[inherit]'/>
              </div>
            </div>
            <div className='relative grow size-full'>
              <div className='size-full py-6 px-6'>
                <div className='relative h-full w-full flex flex-col gap-y-4'>
                  <StepperLayout
                    currentStep={currentStep}
                    className='h-auto flex flex-col mb-12'>
                    {/* <SigninUsernameStep onActionTriggered={handleActionTriggered}/>
                    <SigninPasswordStep onActionTriggered={handleActionTriggered}/> */}
                  </StepperLayout>
                  {/* <div className='flex flex-col justify-center gap-y-4'>
                    <span className='h-[2px] w-full bg-dark-200'></span>
                    <span className='text-center text-lg font-normal font-poppins'>
                      {t('common.or')}
                    </span>
                    <Button
                      fullWidth
                      variant='contained'
                      className='bg-[#5865F2] hover:bg-[#5865F2] max-w-96 mx-auto'
                      startIcon={<BsDiscord/>}
                      onClick={() => handleDiscordSignin()}>
                      {t('signin.discord')}
                    </Button>
                  </div> */}
                  <div className='mt-auto flex items-center text-gray-700'>
                    <Typography
                      variant='body1'
                      className='font-poppins text-sm'>
                      {t('common.copyright', { year: new Date().getFullYear() })}
                    </Typography>
                    <div className='ml-auto'>
                      hola
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Login;