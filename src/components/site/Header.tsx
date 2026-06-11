import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/lessons", label: "Lessons" },
  { to: "/pass-plus", label: "Pass Plus" },
  { to: "/private-hire-test", label: "Private Hire" },
  { to: "/refresher", label: "Refresher" },
  { to: "/prices", label: "Prices" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b-2 border-foreground">
      <div className="container-narrow flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Hull Driving School home">
          <span className="grid place-items-center h-10 w-10 bg-primary text-primary-foreground font-black text-xl">H</span>
          <span className="font-black text-base sm:text-lg tracking-tighter uppercase">Hull Driving School</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-7" aria-label="Primary">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/75 hover:text-success transition-colors"
              activeProps={{ className: "text-[11px] font-black uppercase tracking-[0.18em] text-success" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:01482647786" className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 h-11 font-black text-[11px] uppercase tracking-[0.18em] hover:bg-foreground transition-colors">
            <Phone className="h-4 w-4" aria-hidden /> 01482 647786
          </a>
          <button
            className="xl:hidden p-2.5 border-2 border-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t-2 border-foreground bg-background">
          <nav className="container-narrow py-4 grid gap-1" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-bold uppercase tracking-widest text-foreground/85 hover:bg-muted"
                activeProps={{ className: "px-3 py-3 text-sm font-black uppercase tracking-widest text-success bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:01482647786" className="btn-primary mt-3 sm:hidden">
              <Phone className="h-4 w-4" aria-hidden /> Call 01482 647786
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
