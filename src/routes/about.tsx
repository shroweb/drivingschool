import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import instructorImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hull Driving School — Teaching Hull to Drive Since 1989" },
      { name: "description", content: "One of the most respected driving schools in Hull. Independent, full-time instructors who enjoy teaching. Over 35 years on Hull's roads." },
      { property: "og:title", content: "About Hull Driving School" },
      { property: "og:description", content: "Teaching Hull to drive since 1989." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="One of Hull's most respected driving schools." sub="Independent. Full time. Over 35 years on Hull's roads." />

      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2>Why we exist</h2>
              <p className="mt-3 text-foreground/90 leading-relaxed">Learning to drive is not just about getting a licence. It's an essential life skill — one that opens the door to freedom and new possibilities. We started Hull Driving School to give people in this city the best possible experience of learning to drive, at a price that doesn't punish you for needing more time.</p>
            </div>
            <div>
              <h2>Our instructors</h2>
              <p className="mt-3 text-foreground/90 leading-relaxed">Full time. DVSA Approved. Fully insured. Every instructor on our team actually enjoys teaching — that matters more than any qualification. We've been helping learners pass their tests in Hull for over 35 years, and we bring both patience and honesty to every lesson. You'll always know where you stand.</p>
            </div>
            <div>
              <h2>How we teach</h2>
              <p className="mt-3 text-foreground/90 leading-relaxed">Everyone learns at a different pace and in a different way. We build a personalised lesson plan for each pupil — one that fits around your week and reflects how you learn. We can assess how many lessons you're likely to need after your first session and give you an honest, realistic answer. Our aim is to make you a safe and confident driver, not just someone who passes a test.</p>
            </div>
            <div>
              <h2>Our cars</h2>
              <p className="mt-3 text-foreground/90 leading-relaxed">Modern manual hatchbacks fitted with dual controls. Learner-friendly, clean, and reliable. The same type of car you'll use to take your test — so there are no surprises on the day.</p>
            </div>
            <div>
              <h2>Our standards</h2>
              <p className="mt-3 text-foreground/90 leading-relaxed">Lessons start on time and run for the full duration. Prices stay fixed at the time of booking. We prepare candidates for both their theory and practical tests, and we don't move you forward until you're ready.</p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="btn-primary">Book your first lesson</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card-surface overflow-hidden">
              <img src={instructorImg} alt="Smiling learner with Hull Driving School instructor in a dual-control car" width={960} height={300} loading="lazy" className="w-full h-auto block" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="card-surface p-4"><p className="font-display text-2xl">35+</p><p className="text-xs text-muted-foreground">Years teaching</p></div>
              <div className="card-surface p-4"><p className="font-display text-2xl">DVSA</p><p className="text-xs text-muted-foreground">Approved</p></div>
              <div className="card-surface p-4"><p className="font-display text-2xl">£40</p><p className="text-xs text-muted-foreground">Per hour</p></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
