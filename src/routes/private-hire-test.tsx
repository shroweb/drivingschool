import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/private-hire-test")({
  head: () => ({
    meta: [
      { title: "Hull Private Hire Driving Test Prep | Hull Driving School" },
      { name: "description", content: "Prepare for the Hull council Private Hire driving test with a DVSA Approved instructor. Vehicle provided, structured prep, honest assessment." },
      { property: "og:title", content: "Hull Private Hire Driving Test Prep" },
      { property: "og:description", content: "Pass your Hull council Private Hire test first time." },
      { property: "og:url", content: "/private-hire-test" },
    ],
    links: [{ rel: "canonical", href: "/private-hire-test" }],
  }),
  component: PrivateHire,
});

const faqs = [
  { q: "What is the Hull Private Hire driving test?", a: "It is an assessment set by Hull City Council for anyone applying for a Private Hire (minicab) or Hackney Carriage (taxi) licence. The examiner checks your driving standard, observation, and vehicle control on Hull roads." },
  { q: "Do I need to provide my own car?", a: "No. We provide the car for your prep sessions. If your council assessment requires you to bring a specific vehicle, we can advise on that when you call." },
  { q: "What do I need to bring?", a: "Bring your full UK driving licence. You must already hold a full licence before applying for a Private Hire licence." },
  { q: "How many sessions will I need?", a: "It depends on your current standard. Most candidates with a current full licence need between two and six hours of focused prep before they are test-ready. We'll give you an honest estimate after your first session." },
];

function PrivateHire() {
  return (
    <>
      <PageHero
        eyebrow="Private Hire"
        title="Pass your Hull Private Hire driving test first time."
        sub="Structured preparation for the Hull council assessment with a DVSA Approved instructor and a car set up for the test."
      >
        <a href="tel:01482647786" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> Call to book</a>
        <Link to="/contact" className="btn-outline">Enquire</Link>
      </PageHero>

      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface p-6">
                <h2>What the test involves</h2>
                <p className="mt-3 text-foreground/90">The Hull council examiner will assess your driving on local roads. You'll be expected to demonstrate:</p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Safe observation and hazard awareness",
                    "Smooth control and good road position",
                    "A reverse manoeuvre",
                    "An emergency stop",
                    "Correct behaviour at junctions and roundabouts",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span className="text-foreground/90 text-sm">{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="card-surface p-6">
                <h2>How we prepare you</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "Honest first assessment of your standard",
                    "Sessions on the typical test routes",
                    "Manoeuvres practised to examiner standard",
                    "Dual-control car for safe practice",
                    "Clear feedback after every session",
                  ].map((t) => (
                    <li key={t} className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary mt-0.5" aria-hidden /> <span className="text-foreground/90 text-sm">{t}</span></li>
                  ))}
                </ul>
                <h3 className="mt-6">What to bring</h3>
                <p className="mt-2 text-sm text-muted-foreground">Just your full UK driving licence. You must already hold a full licence to apply for a Private Hire licence with the council.</p>
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
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Typically 2–6 hours total prep</li>
              <li>Car provided for all sessions</li>
              <li>Written assessment notes on request</li>
            </ul>
            <a href="tel:01482647786" className="mt-5 btn-primary w-full">Call to book</a>
            <p className="mt-3 text-xs text-muted-foreground">Pay by cash or bank transfer. You must hold a full UK licence before booking.</p>
          </aside>
        </div>
      </section>

      <CTASection title="Book a Private Hire assessment" sub="Call 01482 647786 and we'll book your first session." />
    </>
  );
}
