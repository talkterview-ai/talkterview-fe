"use client";

import { useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/base/components/ui";

interface FieldSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FieldSearchInput = ({
  value,
  onChange,
  placeholder = "분야를 검색해보세요",
}: FieldSearchInputProps) => {
  const ref = useCallback((node: any) => {
    node?.focus();
  }, []);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/80 h-12"
      />
    </div>
  );
};

export { FieldSearchInput };
