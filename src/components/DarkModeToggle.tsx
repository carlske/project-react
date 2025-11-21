import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDarkMode } from "@/hooks/useDarkMode";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
