"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/base/components/ui";
import { ChevronDown, User } from "lucide-react";
import type { Role } from "@/entities/fields/models/types";
import { cn } from "@/base/utils";

interface FieldCategoryCardProps {
  role: Role;
  isOpen: boolean;
  selectedField: string | null;
  onToggle: () => void;
  onFieldSelect: (role: string, field: string) => void;
}

const FieldCategoryCard = ({
  role,
  isOpen,
  selectedField,
  onToggle,
  onFieldSelect,
}: FieldCategoryCardProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger
          asChild
          className="hover:bg-transparent cursor-pointer"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-gray-900">
                    {role.roleName}
                  </CardTitle>
                  <CardDescription>{role.fieldCount}개 분야</CardDescription>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {role.fieldList.map((field) => (
                <Button
                  key={field.fieldId}
                  variant={
                    selectedField === field.fieldName ? "default" : "outline"
                  }
                  className={cn(
                    "h-auto p-3 text-left justify-start",
                    selectedField === field.fieldName
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white/50 hover:bg-white/80 text-gray-700 border-slate-200"
                  )}
                  onClick={() => onFieldSelect(role.roleName, field.fieldName)}
                >
                  <div className="w-full">
                    <p className="font-medium text-sm">{field.fieldName}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export { FieldCategoryCard };
