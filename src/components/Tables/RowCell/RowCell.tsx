import type { ReactNode } from 'react';

import { TableCell } from '@/components/ui/table';

import type { RowCellProps } from './@types';

export function RowCell({ value }: RowCellProps) {
  const node: ReactNode = value;
  return <TableCell className="px-4 py-2">{node}</TableCell>;
}
