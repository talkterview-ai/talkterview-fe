import { Suspense } from "react";
import { BrandingCard } from "@/entities/auth/ui";
import { LoginForm } from "@/features/auth/ui";

const LoginPageView = () => {
  return (
    <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
      <BrandingCard />

      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export { LoginPageView };
