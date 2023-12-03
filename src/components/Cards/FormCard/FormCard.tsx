'use client';

import { formatDistance } from 'date-fns';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaEdit, FaWpforms } from 'react-icons/fa';
import { LuView } from 'react-icons/lu';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { FormCardProps } from './@types';

export function FormCard({ form }: FormCardProps) {
  return (
    <Card className="border border-foreground/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate font-bold">{form.name}</span>
          <Badge variant={!form.published ? 'destructive' : 'default'}>
            {form.published ? 'Published' : 'Draft'}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-sm">
          {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || 'No description'}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button
            asChild
            variant="secondary"
            className="text-md mt-2 w-full gap-4"
          >
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant="secondary"
            className="text-md mt-2 w-full gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
