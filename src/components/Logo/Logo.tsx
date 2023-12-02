import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className='font-bold text-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text'
    >
      FormCreator
    </Link>
  );
};
