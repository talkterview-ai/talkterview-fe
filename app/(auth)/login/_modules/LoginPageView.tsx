import { BrandingCard } from "@/app/(auth)/login/_entities/ui";
import { LoginForm } from "@/app/(auth)/login/_features/ui";

const LoginPageView = () => {
  return (
    <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
      <BrandingCard />
      <LoginForm />
    </div>
  );
};

export { LoginPageView };
