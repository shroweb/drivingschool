import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Hull Driving School" },
      { name: "description", content: "Common questions about driving lessons in Hull: cost, hours needed, pick-ups, test cars, and cancellation policy." },
      { property: "og:title", content: "FAQs — Hull Driving School" },
      { property: "og:description", content: "Common questions about lessons in Hull." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQs,
});

const faqs = [
  { q: "How long does it usually take to pass?", a: "Most learners need 30 to 45 hours of paid tuition plus private practice. After your first lesson we'll give you an honest estimate." },
  { q: "What's the difference between manual and automatic?", a: "We teach manual only. A manual licence lets you drive both. An automatic licence only lets you drive automatics." },
  { q: "Do you pick me up from home, college, or work?", a: "Yes. Pick-ups across Hull and East Riding at no extra cost." },
  { q: "Can I use my own car for the test?", a: "We'd usually recommend you take the test in the car you've trained in. If your own car is suitable, talk to us before booking." },
  { q: "How do I book and pay?", a: "Call 01482 647786 or send a message. Pay per lesson by bank transfer or cash, or save with a block of 10 or 20." },
  { q: "What's your cancellation policy?", a: "48 hours notice and there's no charge. Less than that, we ask for the lesson fee." },
  { q: "Do you teach nervous drivers?", a: "Yes. A lot of our refresher work is with people rebuilding confidence." },
  { q: "Do you cover my area?", a: "We cover all of Hull and most of East Riding. If you're not sure, ring us and ask." },
];

function FAQs() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Common questions." sub="Quick answers to the things learners ask most often." />
      <section className="section-y">
        <div className="container-narrow max-w-3xl grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-surface p-5 group">
              <summary className="cursor-pointer font-medium list-none flex items-center justify-between gap-4">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
