import { ImSpinner } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ImSpinner className="animate-spin h-12 w-12" />
    </div>
  );
}
