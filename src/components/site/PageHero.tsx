import { type ReactNode } from "react";

export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="border-b-2 border-foreground bg-background">
      <div className="container-narrow py-16 md:py-24 max-w-4xl">
        {eyebrow && (
          <p className="eyebrow mb-6">
            <span aria-hidden className="inline-block w-10 h-0.5 bg-success" />
            {eyebrow}
          </p>
        )}
        <h1>{title}</h1>
        {sub && <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
