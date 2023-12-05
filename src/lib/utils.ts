import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateFormStats({
  visits,
  submissions,
}: Record<string, number>) {
  let submissionsRate = 0;
  let bounceRate = 0;
  if (visits > 0) {
    submissionsRate = (submissions / visits) * 100;
    bounceRate = 100 - submissionsRate;
  }

  return {
    visits,
    submissions,
    submissionsRate,
    bounceRate,
  };
}
