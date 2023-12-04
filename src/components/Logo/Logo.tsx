import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="bg-gradient-to-br from-violet-700 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent"
    >
      FormCreator
    </Link>
  );
};
