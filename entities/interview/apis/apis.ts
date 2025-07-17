import { fetchClient } from "@/base/fetch";
import type { InterviewRecord } from "../models/types";

export const getRecentInterviewRecords = async (): Promise<
  InterviewRecord[]
> => {
  // const response = await fetchClient.get<InterviewRecord[] | []>(
  //   "dashboard/interview/records/recent"
  // );
  // return response.data.data || [];
  return [
    {
      sessionId: "1",
      interviewDate: "2024-06-01",
      interviewTime: 30,
      averageScore: 92,
      questionCount: 5,
      interviewType: "AI 기출면접",
      role: "프론트엔드 개발자",
      field: "웹 개발",
    },
    {
      sessionId: "2",
      interviewDate: "2024-05-28",
      interviewTime: 25,
      averageScore: 78,
      questionCount: 4,
      interviewType: "AI 기출면접",
      role: "백엔드 개발자",
      field: "서버 개발",
    },
    {
      sessionId: "3",
      interviewDate: "2024-05-20",
      interviewTime: 40,
      averageScore: 85,
      questionCount: 6,
      interviewType: "PDF 기술면접",
      role: "데이터 엔지니어",
      field: "데이터",
    },
  ];
};
