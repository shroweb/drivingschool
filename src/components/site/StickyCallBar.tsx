import { useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

export function StickyCallBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contact") return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-border bg-surface shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <a href="tel:01482647786" className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium">
        <Phone className="h-4 w-4" aria-hidden /> Call
      </a>
      <a href="https://wa.me/447971867026" className="flex items-center justify-center gap-2 py-3 bg-accent text-accent-foreground font-semibold">
        <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
