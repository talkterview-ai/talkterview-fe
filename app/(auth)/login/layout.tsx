export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {children}
    </section>
  );
}
