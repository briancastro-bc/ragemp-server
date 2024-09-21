import {
  FC,
  useState,
} from 'react';
import { useTranslation, } from 'react-i18next';

import background from '@assets/images/background-2.webp';

import StepperLayout, { StepAction, } from '@Layout/StepperLayout';

import AuthCard from '../sections/Card';
import LoginUsernameStep from '../sections/Login/LoginUsernameStep';
import LoginPasswordStep from '../sections/Login/LoginPasswordStep';

type LoginProps = object;

const Login: FC<LoginProps> = () => {
  const { t, } = useTranslation();

  const [currentStep, setCurrentStep,] = useState<number>(0);

  const handleActionTriggered: (
    action: StepAction,
    stepNumber?: number,
  ) => void = (action, stepNumber) => {
    const actions: { 
      [K in StepAction]: () => void 
    } = {
      'next': () => setCurrentStep((previousState) => previousState + 1),
      'previous': () => setCurrentStep((previousState) => previousState - 1),
      'step': () => setCurrentStep(stepNumber ?? 0),
    };

    return actions[action]();
  };

  return (
    <section className='h-screen w-full overflow-hidden'>
      <div className="size-full flex items-center justify-center">
        <AuthCard
          background={background}
          backgroundPosition='left'>
          <StepperLayout
            currentStep={currentStep}
            className='h-auto flex flex-col mb-12'>
            <LoginUsernameStep onActionTriggered={handleActionTriggered}/>
            <LoginPasswordStep onActionTriggered={handleActionTriggered}/>
          </StepperLayout>
        </AuthCard>
      </div>
    </section>
  );
}

export default Login;