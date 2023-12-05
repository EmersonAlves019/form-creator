import { ImSpinner } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ImSpinner className="h-12 w-12 animate-spin" />
    </div>
  );
}
