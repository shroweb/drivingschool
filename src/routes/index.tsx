import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hull Driving School — Driving Lessons in Hull from £40" },
      { name: "description", content: "Manual driving lessons in Hull from £40. Over 35 years teaching learners. DVSA Approved instructors, dual-control cars, fixed prices, same-day reply." },
      { property: "og:title", content: "Hull Driving School — Driving Lessons in Hull from £40" },
      { property: "og:description", content: "Patient, full-time DVSA Approved instructors. Dual-control cars. Fixed prices." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { to: "/lessons", n: "01", title: "Beginner lessons", desc: "From your first time behind the wheel to passing your test. £40 an hour." },
  { to: "/pass-plus", n: "02", title: "Pass Plus", desc: "Six hours of post-test driving. Motorways, night, all-weather. £255." },
  { to: "/refresher", n: "03", title: "Refresher & motorway", desc: "Back behind the wheel, or onto the motorway for the first time." },
  { to: "/private-hire-test", n: "04", title: "Private Hire test prep", desc: "Pass your Hull council Private Hire driving test first time with us." },
] as const;

const areas = ["Hull City Centre","Bransholme","Sutton","Kingswood","Hessle","Cottingham","Anlaby","Willerby","Beverley","Hedon","Holderness Road","West Hull","East Hull","North Hull"];

const reviews = [
  { name: "Chantelle", text: "Rich was an amazing instructor for me. He took me on at last minute and took time out of his weekends to help me pass. 4 lessons and a lot of hard work. He's professional, patient and lovely." },
  { name: "Josh Dawson", text: "Best driving school in Hull by a country mile! Rich gives quality lessons and pushes you to do well. Personally had a great time during my course and looked forward to my lessons." },
  { name: "Kacey Leigh", text: "Always so supportive, reliable and comforting from the beginning and stayed so calm with me whilst learning. Wouldn't have passed my test without him!" },
];

const prices = [
  { label: "Single lesson", price: "£40", note: "The standard hourly rate. Perfect for occasional sessions or focused practice." },
  { label: "Block of 10", price: "£380", note: "Save £20 on our most popular starter package. Ideal for beginners.", highlight: true },
  { label: "Block of 20", price: "£750", note: "Maximum saving of £50. Committing to your licence from day one." },
];

const faqs = [
  { q: "How long does it take to pass?", a: "Most learners need 30 to 45 hours behind the wheel. We give you an honest estimate after your first lesson." },
  { q: "Do you pick me up from home or college?", a: "Yes. We collect from home, work, or college anywhere in Hull and surrounding villages." },
  { q: "What's your cancellation policy?", a: "Give us 48 hours and there's no charge. Less than that, we ask for the lesson fee." },
  { q: "Can I pay per lesson?", a: "Yes. Pay as you go at £40 an hour, or save with a block of 10 or 20." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-foreground relative overflow-hidden h-[420px] md:h-[500px] lg:h-[560px] flex items-center">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={960}
          height={300}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-35% via-background/80 to-transparent" />
        <div className="container-narrow relative z-10 pt-10 pb-28 md:py-20 lg:py-32">
          <div className="max-w-xl">
            <h1>
              Learn to <span className="text-success">drive</span> in Hull.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Over 35 years on Hull's roads. Patient, full-time instructors. Modern dual-control cars. Fixed prices.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent">Book first lesson</Link>
              <Link to="/prices" className="btn-outline">View all prices</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 z-10 bg-primary text-primary-foreground p-6 lg:p-10 text-right">
          <div className="text-4xl lg:text-6xl font-black italic leading-none mb-1">35+</div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] leading-tight">Years teaching<br />in Hull</div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Courses &amp; Lessons</p>
              <h2>Instruction for every stage of driving.</h2>
            </div>
            <Link to="/prices" className="font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-success pb-1 hover:text-success transition-colors">
              See all options
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="bg-background p-8 lg:p-10 group hover:bg-muted transition-colors">
                <div className="text-muted-foreground/25 font-black text-5xl lg:text-6xl mb-10 group-hover:text-success/30 transition-colors">{s.n}</div>
                <h3 className="mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                  Explore <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-y bg-muted border-y-2 border-foreground">
        <div className="container-narrow">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="mb-12">Three steps to your licence.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-foreground border-2 border-foreground">
            {[
              { n: "01", t: "Call or text us", d: "Tell us where you are in Hull and what you're after. We respond the same day." },
              { n: "02", t: "We match you", d: "A full-time DVSA Approved instructor who knows your area inside out." },
              { n: "03", t: "Start driving", d: "Pick-up from home, college, or work. Pay per lesson or buy a block." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8 lg:p-12">
                <div className="text-success font-black text-5xl mb-6 italic">{s.n}</div>
                <h3 className="mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-y bg-primary text-primary-foreground relative overflow-hidden">
        <div aria-hidden className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-black opacity-[0.04] leading-none pointer-events-none uppercase tracking-tighter select-none">
          PASS
        </div>
        <div className="container-narrow relative">
          <div className="max-w-2xl mb-16">
            <p className="text-accent text-[11px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <span aria-hidden className="inline-block w-10 h-0.5 bg-accent" />
              Straightforward Prices
            </p>
            <h2 className="!text-primary-foreground">Fixed at booking. No price rises mid-course.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {prices.map((p) => (
              <div
                key={p.label}
                className={
                  p.highlight
                    ? "p-10 lg:p-12 bg-background text-foreground flex flex-col shadow-[12px_12px_0_0_var(--color-accent)]"
                    : "p-10 lg:p-12 border border-primary-foreground/20 hover:border-accent transition-colors flex flex-col"
                }
              >
                {p.highlight && (
                  <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase px-3 py-1 self-start mb-6 tracking-[0.2em]">
                    Most Popular
                  </span>
                )}
                <h3 className={p.highlight ? "" : "!text-primary-foreground"}>{p.label}</h3>
                <div className={`text-5xl lg:text-6xl font-black my-6 italic ${p.highlight ? "" : "!text-primary-foreground"}`}>{p.price}</div>
                <p className={`text-sm mb-10 leading-relaxed ${p.highlight ? "text-muted-foreground" : "text-primary-foreground/60"}`}>{p.note}</p>
                <Link
                  to="/contact"
                  className={
                    p.highlight
                      ? "mt-auto bg-primary text-primary-foreground py-4 font-black uppercase tracking-[0.18em] text-xs text-center hover:bg-foreground transition-colors"
                      : "mt-auto border-2 border-primary-foreground/30 py-4 font-black uppercase tracking-[0.18em] text-xs text-center text-primary-foreground hover:bg-background hover:text-foreground transition-all"
                  }
                >
                  {p.highlight ? "Purchase Block" : "Book now"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-y border-b-2 border-foreground">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Where we teach</p>
              <h2>Across Hull &amp; East Riding.</h2>
              <p className="mt-5 text-muted-foreground">We pick up from home, college, and work across the city and surrounding villages.</p>
            </div>
            <Link to="/areas-covered" className="font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-success pb-1 hover:text-success transition-colors">
              Full areas list
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <span key={a} className="px-4 py-2.5 border border-foreground text-[11px] font-black uppercase tracking-[0.15em] bg-background">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews + FAQ */}
      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="eyebrow mb-6">Success Stories</p>
            <h2 className="mb-10">Pass stories from Hull.</h2>
            <div className="space-y-6">
              {reviews.map((r) => (
                <figure key={r.name} className="p-8 bg-muted border-l-[12px] border-primary">
                  <div className="flex gap-1 mb-4 text-accent" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="text-lg font-bold mb-5 leading-snug">"{r.text}"</blockquote>
                  <figcaption className="font-black uppercase text-[10px] tracking-[0.2em] text-muted-foreground">{r.name}</figcaption>
                </figure>
              ))}
              <Link to="/reviews" className="inline-flex font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-success pb-1 hover:text-success transition-colors">
                Read all reviews
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-6">Common Questions</p>
            <h2 className="mb-10">Quick answers.</h2>
            <div className="divide-y-2 divide-foreground border-y-2 border-foreground">
              {faqs.map((f) => (
                <details key={f.q} className="group py-7">
                  <summary className="list-none flex justify-between items-center cursor-pointer gap-6">
                    <span className="font-black uppercase text-sm tracking-[0.12em]">{f.q}</span>
                    <span className="text-success transition-transform group-open:rotate-45 text-3xl leading-none">+</span>
                  </summary>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <Link to="/faqs" className="mt-8 inline-flex font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-success pb-1 hover:text-success transition-colors">
              All FAQs
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Mobile call/whatsapp shortcut */}
      <section className="md:hidden container-narrow pb-10">
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:01482647786" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> Call</a>
          <a href="https://wa.me/447971867026" className="btn-accent">WhatsApp</a>
        </div>
      </section>
    </>
  );
}
