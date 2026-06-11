import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/pass-plus")({
  head: () => ({
    meta: [
      { title: "Pass Plus in Hull — 6 hours, £255 | Hull Driving School" },
      { name: "description", content: "Pass Plus in Hull. Six hours of post-test driving covering motorway, dual carriageway, rural, night and all-weather driving. £255." },
      { property: "og:title", content: "Pass Plus in Hull — 6 hours, £255" },
      { property: "og:description", content: "The driving the test does not cover." },
      { property: "og:url", content: "/pass-plus" },
    ],
    links: [{ rel: "canonical", href: "/pass-plus" }],
  }),
  component: PassPlus,
});

const faqs = [
  { q: "When should I book?", a: "As soon as possible after passing your test. Many insurers require you to complete Pass Plus within 12 months of your pass date to qualify for a discount." },
  { q: "Is there a written exam?", a: "No. Pass Plus is entirely practical — six hours of driving across different conditions. There is no theory test or written exam." },
  { q: "Will I get a certificate?", a: "Yes. On completion you receive an official Pass Plus certificate to show your insurer when requesting a discount." },
  { q: "How much can I save on insurance?", a: "It varies by insurer and your personal circumstances. Many new drivers find the saving on their first year's premium covers the cost of the course." },
];

function PassPlus() {
  return (
    <>
      <PageHero
        eyebrow="Pass Plus"
        title="Pass Plus in Hull. Six hours, £255."
        sub="Motorway, dual carriageway, rural roads, night driving, town centres, and bad weather. The driving the test does not cover."
      >
        <a href="tel:01482647786" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> Call to book</a>
        <Link to="/contact" className="btn-outline">Enquire</Link>
      </PageHero>

      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface p-6">
                <h2>What it covers</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "Motorway driving on the M62",
                    "Dual carriageways around Hull and East Riding",
                    "Rural roads and country lanes",
                    "Driving in town and city traffic",
                    "Night driving",
                    "All-weather driving",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span className="text-foreground/90">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="card-surface p-6">
                <h2>Why drivers take it</h2>
                <p className="mt-3 text-foreground/90">Many UK insurers offer a discount for Pass Plus. More importantly, it puts you on the motorway with an instructor before you do it alone.</p>
                <h3 className="mt-6">How the six hours work</h3>
                <p className="mt-2 text-muted-foreground">Usually two or three sessions over a couple of weeks. We plan around your schedule and the weather. You'll receive an official Pass Plus certificate on completion.</p>
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
            <p className="font-display text-4xl mt-1">£255</p>
            <p className="mt-1 text-sm text-muted-foreground">Six hours total</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Usually 2–3 sessions</li>
              <li>Official certificate on completion</li>
              <li>Counts toward insurer discounts</li>
            </ul>
            <a href="tel:01482647786" className="mt-5 btn-primary w-full">Call to book</a>
            <p className="mt-3 text-xs text-muted-foreground">Book within 12 months of passing your test.</p>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
