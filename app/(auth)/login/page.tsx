import { BrandingCard, LoginForm } from "./_components";

export default function LoginPage() {
  return (
    <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
      <BrandingCard />
      <LoginForm />
    </div>
  );
}
