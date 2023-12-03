import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent"
    >
      FormCreator
    </Link>
  );
};
