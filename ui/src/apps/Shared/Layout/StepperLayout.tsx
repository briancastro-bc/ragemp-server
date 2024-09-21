import { 
  memo,
  Children,
  forwardRef, 
  ComponentPropsWithRef, 
} from 'react';

const STEP_TYPE = {
  NEXT: 'next',
  PREV: 'previous',
  STEP: 'step',
} as const;

export type StepAction = (typeof STEP_TYPE)[keyof typeof STEP_TYPE];

export type Step = {
  onActionTriggered: (
    action: StepAction,
    stepNumber?: number,
  ) => void;
};

type StepperLayoutProps = object & ComponentPropsWithRef<'div'> & {
  currentStep: number;
};

const StepperLayout = forwardRef<HTMLDivElement, StepperLayoutProps>(
  (
    {
      children,
      className,
      currentStep = 0,
    },
    ref
  ) => {
    const steps = Children.toArray(children);

    return (
      <div 
        ref={ref}
        className={className}>
        {steps && steps?.length > 0 && steps[currentStep]}
      </div>
    );
  }
);

const MemorizeStepper = memo(StepperLayout)

export default MemorizeStepper;