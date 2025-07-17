const features = [
  { color: "bg-green-500", text: "실시간 AI 피드백" },
  { color: "bg-blue-500", text: "실시간 힌트 제공" },
  { color: "bg-purple-500", text: "상세 분석 리포트" },
];

const FeaturesInfoCard = () => {
  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
      <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`w-2 h-2 ${feature.color} rounded-full`}></div>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FeaturesInfoCard };
