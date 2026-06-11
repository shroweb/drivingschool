import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/refresher")({
  head: () => ({
    meta: [
      { title: "Refresher & Motorway Lessons in Hull | Hull Driving School" },
      { name: "description", content: "Refresher driving lessons and motorway tuition in Hull for full licence holders. Book by the hour or in blocks. Same £40 rate." },
      { property: "og:title", content: "Refresher & Motorway Lessons in Hull" },
      { property: "og:description", content: "Back behind the wheel, on your terms." },
      { property: "og:url", content: "/refresher" },
    ],
    links: [{ rel: "canonical", href: "/refresher" }],
  }),
  component: Refresher,
});

const faqs = [
  { q: "Do I need to retake my test?", a: "No. Refresher lessons are for full licence holders. There is no formal test at the end — you stop when you feel confident." },
  { q: "How many sessions will I need?", a: "It depends on how long you've been off the road. Most people are comfortable again after two to four hours. We'll tell you honestly after your first session." },
  { q: "Can we go straight on the motorway?", a: "Yes. If the motorway is your main concern, we go there on the first session." },
  { q: "What car will we use?", a: "Our dual-control manual car. This means the instructor can intervene safely if needed, which puts most nervous drivers at ease straight away." },
];

function Refresher() {
  return (
    <>
      <PageHero
        eyebrow="Refresher & motorway"
        title="Back behind the wheel, on your terms."
        sub="Refresher lessons for nervous drivers and full licence holders returning after a break. Motorway sessions for drivers who never went on one."
      >
        <a href="tel:01482647786" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> Call 01482 647786</a>
        <Link to="/contact" className="btn-outline">Get a callback</Link>
      </PageHero>

      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface p-6">
                <h2>Who it's for</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "Licence holders who haven't driven in years",
                    "Nervous drivers rebuilding confidence",
                    "Drivers who passed before motorways were tested",
                    "Anyone new to Hull learning local roads",
                    "People changing from automatic to manual",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span className="text-foreground/90">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="card-surface p-6">
                <h2>What we cover</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "Reversing, parking, and tight junctions",
                    "Roundabouts and dual carriageways",
                    "Motorway joining, lane discipline, and exits",
                    "Night and bad-weather driving",
                    "Town centre and city driving",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span className="text-foreground/90">{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2>What to expect</h2>
              <p className="mt-3 text-muted-foreground">Your first session starts with a brief chat about what you want from the lessons. Then we drive — no pressure, no judgment. We adapt to your pace and tell you honestly what's going well and what we'd like to work on.</p>
              <p className="mt-3 text-muted-foreground">You don't need any documentation beyond your driving licence. We provide the car, and there is no pass or fail at the end — you decide when you're done.</p>
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
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Same rate as standard lessons</li>
              <li>Book by the hour or in blocks</li>
              <li>No pass/fail — stop when ready</li>
            </ul>
            <a href="tel:01482647786" className="mt-5 btn-primary w-full">Call to book</a>
            <p className="mt-3 text-xs text-muted-foreground">Pay by cash or bank transfer.</p>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
