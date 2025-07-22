import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/base/components/ui";
import { Award, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PATH } from "@/base/constants/path";

const QuickActionsSection = () => {
  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50">
      <CardHeader>
        <CardTitle className="text-gray-900">빠른 실행</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-white/50"
            asChild
          >
            <Link href={PATH.schedule}>
              <Calendar className="w-4 h-4 mr-3" />
              면접 일정 등록
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-white/50"
            asChild
          >
            <Link href={PATH.records}>
              <Award className="w-4 h-4 mr-3" />
              성과 분석 보기
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-white/50"
            asChild
          >
            <Link href={PATH.community}>
              <MessageSquare className="w-4 h-4 mr-3" />
              커뮤니티 참여
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { QuickActionsSection };
