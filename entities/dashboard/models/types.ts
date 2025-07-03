export type TodayInterviewTips = {
  tips: string;
};

export type InterviewStats = {
  totalInterviewCnt: number;
  averageScore: number;
  topScoreDetail: StatsDetail;
  nextInterview: string;
};

type StatsDetail = {
  topScore: number;
  question: string;
  answer: string;
};
