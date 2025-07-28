import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default LoginLayout;
