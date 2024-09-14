import { FC, useRef, } from 'react';
import { Outlet, useNavigation, } from 'react-router-dom';

import LoadingBar from '@apps/Shared/Components/LoadingBar';

type RootLayoutProps = object;

const RootLayout: FC<RootLayoutProps> = () => {
  const navigation = useNavigation();

  const loadingBarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {navigation?.state === 'loading' && <LoadingBar ref={loadingBarRef}/>}
      <div style={{
        position: 'relative',
        top: navigation?.state === 'loading' && loadingBarRef.current ? `${loadingBarRef?.current?.clientHeight}px` : '0px',
      }}>
        <h1>Hello world!</h1>
        <Outlet/>
      </div>
    </>
  );
};

export default RootLayout;