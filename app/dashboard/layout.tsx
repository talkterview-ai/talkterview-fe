import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <div className="min-h-screen bg-slate-100">{children}</div>;
};

export default DashboardLayout;
