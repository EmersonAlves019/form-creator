export type SubmissionsTableProps = {
  formId: number;
};

export type ColumnsType = {
  id: string;
  label: string;
  required: boolean;
  type: string;
};

export type RowsType = {
  [key: string]: string | number | boolean;
} & {
  submittedAt: string;
};
