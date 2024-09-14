import {
  FC,
} from 'react';

type LoginProps = object;

const Login: FC<LoginProps> = () => {
  return (
    <section className='h-screen w-full overflow-hidden'>
      <div className="size-full flex items-center justify-center">
        <article className='h-[630px] w-[768px] rounded-lg bg-white'>
          <h1>Hola MUNDO!</h1>
        </article>
      </div>
    </section>
  );
}

export default Login;