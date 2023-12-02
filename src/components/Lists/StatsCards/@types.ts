import { getFormStats } from "@/actions/form";

export type StatsCardsProps = {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
};