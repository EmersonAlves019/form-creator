import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function SeparatorFieldDesigner() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="text-muted-foreground">Separator</Label>
      <Separator />
    </div>
  );
}
