import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Driving Lessons in Hull from £40 — Hull Driving School" },
      { name: "description", content: "Manual driving lessons in Hull from £40 an hour. Pick-up from home, college or work. Patient, full-time DVSA Approved instructors." },
      { property: "og:title", content: "Driving Lessons in Hull from £40" },
      { property: "og:description", content: "Patient instructors, dual-control cars, lessons to suit your pace." },
      { property: "og:url", content: "/lessons" },
    ],
    links: [{ rel: "canonical", href: "/lessons" }],
  }),
  component: Lessons,
});

const faqs = [
  { q: "Do I need a provisional licence?", a: "Yes. You'll need a provisional before your first lesson. Apply via the DVLA website — it costs £34 and usually arrives within a week." },
  { q: "How many hours will I need?", a: "Most learners need 30 to 45 hours. We'll give you an honest estimate after your first lesson based on how you get on." },
  { q: "What do I need to bring?", a: "Just your provisional licence. We supply the car, L plates, and everything else." },
  { q: "Do you help with the theory test?", a: "We cover theory and hazard perception throughout your lessons. We'll point you to the best resources for the written test." },
  { q: "Can I pay per lesson or in blocks?", a: "Both. Pay as you go at £40 an hour, or save with a block of 10 (£380) or 20 (£750). Prices are fixed at the time of booking." },
];

function Lessons() {
  return (
    <>
      <PageHero
        eyebrow="Beginner lessons"
        title="Manual driving lessons in Hull from £40 an hour."
        sub="One hour, ninety minutes, or two. We pick you up from home, work, or college and teach at a pace that fits you."
      >
        <a href="tel:01482647786" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> Call 01482 647786</a>
        <Link to="/contact" className="btn-outline">Book a first lesson</Link>
      </PageHero>

      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2>What's included</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "DVSA Approved instructor",
                  "Modern dual-control manual car",
                  "Pick-up and drop-off in Hull",
                  "Personalised lesson plan",
                  "Honest progress feedback",
                  "Theory and hazard support",
                ].map((t) => (
                  <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Your first lesson</h2>
              <p className="mt-3 text-muted-foreground">We start somewhere quiet. Cockpit drill, controls, moving off and stopping. By the end of the hour you'll have driven a real road. No tricks, no pressure.</p>
            </div>
            <div>
              <h2>Lesson lengths</h2>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {[
                  { t: "1 hour", d: "Good for early lessons and topping up." },
                  { t: "1.5 hours", d: "Most learners' sweet spot." },
                  { t: "2 hours", d: "Best value once you're driving independently." },
                ].map((x) => (
                  <div key={x.t} className="card-surface p-5">
                    <p className="font-display text-2xl">{x.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>Common questions</h2>
              <div className="mt-4 divide-y-2 divide-foreground border-y-2 border-foreground">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="list-none flex justify-between items-center cursor-pointer gap-6">
                      <span className="font-black uppercase text-sm tracking-[0.1em]">{f.q}</span>
                      <span className="text-success transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <aside className="card-surface p-6 h-fit">
            <p className="text-sm text-muted-foreground">Pricing</p>
            <p className="font-display text-4xl mt-1">£40<span className="text-base text-muted-foreground">/hour</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Block of 10: <span className="font-bold">£380</span> <span className="text-muted-foreground">(save £20)</span></li>
              <li>Block of 20: <span className="font-bold">£750</span> <span className="text-muted-foreground">(save £50)</span></li>
            </ul>
            <Link to="/prices" className="mt-5 btn-primary w-full">See all prices</Link>
            <p className="mt-3 text-xs text-muted-foreground">Prices fixed at booking. Pay by cash or bank transfer.</p>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
