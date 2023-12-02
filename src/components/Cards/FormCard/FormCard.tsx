import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { FormCardProps } from './@types';

export function FormCard({ form }: FormCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className='flex items-center gap-2 justify-between'>
            {form.name}
          </span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
