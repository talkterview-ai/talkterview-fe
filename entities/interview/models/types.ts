import type { Profile } from "@/entities/user/models/types";

export type InterViewType = "AI 기출면접" | "PDF 기술면접";

export interface InterviewRecord extends Pick<Profile, "role" | "field"> {
  sessionId: string;
  interviewDate: string;
  interviewTime: number;
  averageScore: number;
  questionCount: number;
  interviewType: InterViewType;
}
