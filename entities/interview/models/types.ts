<<<<<<< HEAD
import type { Profile } from "@/entities/user/models/types";

export type InterViewType = "AI 기출면접" | "PDF 기술면접";

export interface InterviewRecord extends Pick<Profile, "role" | "field"> {
=======
export type InterviewRecord = {
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2))
  sessionId: string;
  interviewDate: string;
  interviewTime: number;
  averageScore: number;
  questionCount: number;
<<<<<<< HEAD
  interviewType: InterViewType;
}
=======
};
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2))
