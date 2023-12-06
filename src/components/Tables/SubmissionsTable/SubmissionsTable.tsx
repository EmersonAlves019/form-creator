import { formatDistance } from 'date-fns';

import { getFormSubmissions } from '@/actions/form';
import type { FormElementInstance } from '@/components/Forms/FormElements/@types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { RowCell } from '../RowCell';
import type { ColumnsType, RowsType, SubmissionsTableProps } from './@types';

export async function SubmissionsTable({ formId }: SubmissionsTableProps) {
  const form = await getFormSubmissions(formId);
  if (!form) throw new Error('Form not found');

  const FormElements = JSON.parse(form.content) as FormElementInstance[];

  const columns: ColumnsType[] = [];
  const rows: RowsType[] = [];

  FormElements.forEach((element) => {
    columns.push({
      id: element.id,
      label: element.properties?.label,
      required: element.properties?.required,
      type: element.type,
    });
  });

  form.FormSubmission.forEach((submission) => {
    const content = JSON.parse(submission.content);
    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  return (
    <div className="container">
      <h1 className="my-4 text-2xl font-bold">Submissions</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="px-4 py-2 text-left">
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-right uppercase text-muted-foreground">
                Submitted at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.submittedAt}>
                {columns.map((column) => (
                  <RowCell
                    key={column.id}
                    type={column.type}
                    value={row[column.id]}
                  />
                ))}
                <TableCell className="text-right">
                  {formatDistance(new Date(row.submittedAt), new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
