import { ArrowLeft, Link } from "lucide-react";
import { Button } from "../ui";

interface HeaderProps {
  hasBackButton?: boolean;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const Header = async ({
  hasBackButton = true,
  leftSlot,
  rightSlot,
}: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-4 py-3 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {leftSlot && (
          <div className="flex items-center gap-2">
            {hasBackButton && (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {leftSlot}
          </div>
        )}

        {rightSlot}
      </div>
    </header>
  );
};

export { Header };
