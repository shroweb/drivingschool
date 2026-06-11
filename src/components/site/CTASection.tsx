import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTASection({ title = "Ready to start?", sub = "Call 01482 647786 or send a quick message. We reply the same day." }: { title?: string; sub?: string }) {
  return (
    <section className="section-y">
      <div className="container-narrow">
        <div className="bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <div aria-hidden className="absolute -right-10 top-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-black opacity-[0.06] leading-none pointer-events-none uppercase tracking-tighter select-none">PASS</div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="!text-primary-foreground">{title}</h2>
              <p className="mt-4 text-primary-foreground/70">{sub}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href="tel:01482647786" className="bg-accent text-accent-foreground px-8 h-14 inline-flex items-center justify-center gap-2 font-black text-xs uppercase tracking-[0.18em] border-2 border-background shadow-[6px_6px_0_0_rgb(255,255,255)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_rgb(255,255,255)] transition-all">
                <Phone className="h-4 w-4" aria-hidden /> 01482 647786
              </a>
              <Link to="/contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 h-14 inline-flex items-center justify-center font-black text-xs uppercase tracking-[0.18em] hover:bg-primary-foreground/10 transition-colors">
                Get a callback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
