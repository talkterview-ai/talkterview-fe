"use client";

import Link from "next/link";
import { cn } from "@/base/utils";
import { Card, CardContent, Button } from "@/base/components/ui";
import { ArrowRight, Clock, LucideIcon } from "lucide-react";

interface InterviewCardProps {
  title: string;
  description: string;
  duration: string;
  feature: string;
  icon: LucideIcon;
  featureIcon: LucideIcon;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  variant?: "default" | "outline";
  buttonClass?: string;
}

const InterviewCard = ({
  title,
  description,
  duration,
  feature,
  icon: Icon,
  featureIcon: FeatureIcon,
  href,
  gradientFrom,
  gradientTo,
  variant = "default",
  buttonClass,
}: InterviewCardProps) => {
  const isOutline = variant === "outline";

  return (
    <div className="group relative">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity",
          gradientFrom,
          gradientTo
        )}
      />
      <Card
        className={cn(
          "relative bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105",
          isOutline ? "border-purple-200/50" : "border-blue-200/50"
        )}
      >
        <CardContent className="p-6 text-center">
          <div
            className={cn(
              "w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center mx-auto mb-4",
              gradientFrom,
              gradientTo
            )}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-4">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
            <span>•</span>
            <FeatureIcon className="w-3 h-3" />
            <span>{feature}</span>
          </div>
          <Button
            className={
              buttonClass ||
              (isOutline
                ? "w-full border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent shadow-md"
                : "w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md")
            }
            variant={variant}
            asChild
          >
            <Link href={href}>
              시작하기
              {isOutline ? (
                <Icon className="w-4 h-4 ml-2" />
              ) : (
                <ArrowRight className="w-4 h-4 ml-2" />
              )}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { InterviewCard };
