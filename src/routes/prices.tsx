import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Check } from "lucide-react";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Driving Lesson Prices in Hull | Hull Driving School" },
      { name: "description", content: "Driving lesson prices in Hull. £40 per hour, £380 for 10, £750 for 20, Pass Plus £255. Fixed at booking." },
      { property: "og:title", content: "Driving Lesson Prices in Hull" },
      { property: "og:description", content: "Straightforward prices. Fixed at booking." },
      { property: "og:url", content: "/prices" },
    ],
    links: [{ rel: "canonical", href: "/prices" }],
  }),
  component: Prices,
});

const tiers = [
  { label: "Single lesson", price: "£40", note: "Per hour, pay as you go" },
  { label: "Block of 10", price: "£380", note: "Save £20", highlight: true },
  { label: "Block of 20", price: "£750", note: "Save £50" },
  { label: "Pass Plus", price: "£255", note: "Six hours" },
];

function Prices() {
  return (
    <>
      <PageHero eyebrow="Prices" title="Straightforward prices. Fixed at booking." sub="Your price does not go up part way through your course." />

      <section className="section-y">
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div key={t.label} className={`card-surface p-6 flex flex-col ${t.highlight ? "!border-primary" : ""}`}>
              {t.highlight && <span className="inline-block mb-2 text-[11px] tracking-wider uppercase font-semibold text-primary">Most popular</span>}
              <p className="text-sm text-muted-foreground">{t.label}</p>
              <p className="font-display text-4xl mt-1 tabular-nums">{t.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
              <Link to="/contact" className="mt-6 btn-outline">Book {t.label}</Link>
            </div>
          ))}
        </div>

        <div className="container-narrow mt-12 grid md:grid-cols-2 gap-6">
          <div className="card-surface p-6">
            <h2>What's included</h2>
            <ul className="mt-4 space-y-2">
              {["Full DVSA Approved instructor","Modern dual-control manual car","Pick-up and drop-off within Hull","No fuel surcharge","Honest progress updates"].map((t) => (
                <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <h2>Payment</h2>
            <p className="mt-3 text-foreground/90">Pay by bank transfer or cash. Blocks are paid up-front and locked in at the price quoted. Pay as you go is settled lesson by lesson.</p>
            <h3 className="mt-6">Cancellations</h3>
            <p className="mt-2 text-muted-foreground">48 hours notice and there's no charge. Inside 48 hours we ask for the lesson fee.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
