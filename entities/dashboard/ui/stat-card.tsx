import { cn } from "@/base/utils";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/base/components/ui";

export type StatCardProps = {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  label: string;
  value: string;
  description: string;
};

const StatCard = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  label,
  description,
  value,
}: StatCardProps) => (
  <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 py-0 justify-center">
    <CardContent className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray600">{label}</p>
          <p className="text-xl font-bold text-gray800">{value}</p>
          <p className="text-xs text-gray500">{description}</p>
        </div>

        <div
          className={cn(
            "w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center",
            iconBgColor
          )}
        >
          {<Icon className={cn("w-6 h-6", iconColor)} />}
        </div>
      </div>
    </CardContent>
  </Card>
);

export { StatCard };
