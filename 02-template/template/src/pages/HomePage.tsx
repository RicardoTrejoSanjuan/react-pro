import { useCallback, useMemo, useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => setCounter(prev => prev + 1), []);

  const buttonText = useMemo(() => `Click me ${counter}`, [counter]);

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-4xl font-bold'>
          $$appInstance$$ 🩵 I&apos;m alive
        </h1>
        <p className='p-5'>Let&apos;s get the party started...</p>
        <button
          className='px-6 py-2 text-white rounded-lg shadow-md transition-all bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600'
          onClick={incrementCounter}>
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default HomePage;
