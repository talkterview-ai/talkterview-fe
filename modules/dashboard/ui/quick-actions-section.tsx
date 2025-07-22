import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/base/components/ui";
import { Award, Calendar, type LucideIcon, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PATH } from "@/base/constants/path";

type ActionItemType = {
  icon: LucideIcon;
  path: string;
  label: string;
};

const QuickActionsSection = () => {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50">
      <CardHeader>
        <CardTitle className="text-gray-900">빠른 실행</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-1/2 justify-start text-gray-700 hover:bg-gray-100/50"
                asChild
              >
                <Link href={item.path}>
                  <Icon className="w-4 h-4 mr-3" />
                  <span className="truncate line-clamp-1">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { QuickActionsSection };

const ITEMS: ActionItemType[] = [
  {
    icon: Calendar,
    path: PATH.schedule,
    label: "면접 일정 등록",
  },
  {
    icon: Award,
    path: PATH.records,
    label: "성과 분석 보기",
  },
  {
    icon: MessageSquare,
    path: PATH.community,
    label: "커뮤니티 참여",
  },
] as const;
