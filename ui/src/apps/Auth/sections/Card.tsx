import {
  FC,
  ComponentPropsWithRef,
} from 'react';
import { useTranslation, } from 'react-i18next';

import {
  Typography,
} from '@theme/main';

import Image from '@Components/Image';

type CardProps = object & ComponentPropsWithRef<'article'> & {
  background: string;
  backgroundPosition: 'left' | 'right';
};

const Card: FC<CardProps> = ({
  children,
  background,
  backgroundPosition,
}) => {
  const { t, } = useTranslation();

  return (
    <article className='h-[768px] w-[1024px] rounded-lg bg-white shadow-sm border border-dark-200'>
      <div 
        className='size-full flex rounded-[inherit]'
        style={{
          flexDirection: backgroundPosition === 'left' ? 'row' : 'row-reverse',
        }}>
        <div className='relative h-auto w-full max-w-[320px] rounded-[inherit]'>
          <div className='absolute h-full rounded-[inherit]'>
            <Image
              file={{
                src: background
              }}
              alt={'Representative login background'}
              className='h-full w-full object-contain rounded-[inherit]'/>
          </div>
        </div>
        <div className='relative grow size-full'>
          <div className='size-full p-12'>
            <div className='relative h-full w-full flex flex-col gap-y-4'>
              {children}
              <div className='mt-auto flex items-center text-gray-700'>
                <Typography
                  variant='body1'
                  className='font-poppins text-sm'>
                  {t('common.copyright.company', { year: new Date().getFullYear() })}
                </Typography>
                <div className='ml-auto'>
                  <Typography
                    variant='body1'
                    className='font-poppins text-sm'>
                    {t('common.copyright.text')}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;