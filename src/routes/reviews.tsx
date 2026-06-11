import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Star } from "lucide-react";
import pass1 from "@/assets/pass-1.jpg";
import pass2 from "@/assets/pass-2.jpg";
import pass3 from "@/assets/pass-3.jpg";
import pass4 from "@/assets/pass-4.jpg";
import pass5 from "@/assets/pass-5.jpg";
import pass6 from "@/assets/pass-6.jpg";
import pass7 from "@/assets/pass-7.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Hull Driving School" },
      { name: "description", content: "What learners say about Hull Driving School. Pass stories from Sutton, Kingswood, Hessle and across Hull." },
      { property: "og:title", content: "Reviews — Hull Driving School" },
      { property: "og:description", content: "Pass stories from Hull learners." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Chantelle", tag: "5 stars · Google", text: "Rich was an amazing instructor for me. Not only did he take me on last minute because pass me fast let me down he also took time out of his weekends to help me pass. 4 lessons and a lot of hard work. He's professional, patient and lovely." },
  { name: "Josh Dawson", tag: "5 stars · Google", text: "Best driving school in Hull by a country mile! Rich gives quality lessons and pushes you to do well. Lessons are adapted to your ability whilst still being challenging enough to progress. Personally had a great time during my course and looked forward to my lessons. Highly recommend." },
  { name: "Kacey Leigh", tag: "5 stars · Google", text: "Did my lessons continuously with Rich from a recommendation, always so supportive, reliable and comforting from the beginning and stayed so calm with me whilst learning, wouldn't have passed my test without him!" },
  { name: "Jake Wright", tag: "5 stars · Google", text: "Rich is a really good instructor who teaches you properly and safely. If you go with him it's a very high chance you'll pass first time. He is very safe and teaches you in your own time, really recommend him." },
  { name: "Hasan", tag: "5 stars · Google", text: "Rich teaches the driving skills needed not just for the test but for after passing as well. Enjoyed my lessons with him unlike a previous instructor from a different driving school. Lessons were well-priced." },
];

const passPhotos = [pass1, pass2, pass3, pass4, pass5, pass6, pass7];

function Reviews() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="What our learners say.">
        <div className="flex items-center gap-3 py-2 px-4 border-2 border-foreground bg-background">
          <span className="text-accent text-xl">★★★★★</span>
          <span className="font-black text-sm">5.0</span>
          <span className="text-muted-foreground text-sm">· 19 reviews on Google</span>
        </div>
      </PageHero>

      {/* Pass photo gallery */}
      <section className="section-y border-b-2 border-foreground bg-muted">
        <div className="container-narrow">
          <p className="eyebrow mb-6">Pass photos</p>
          <h2 className="mb-10">Real passes. Real cars.</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {passPhotos.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden border-2 border-foreground bg-background">
                <img
                  src={src}
                  alt={`Hull Driving School learner holding their pass certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <figure key={r.name + r.text.slice(0, 20)} className="card-surface p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" aria-hidden />)}
                </div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-success">{r.tag}</span>
              </div>
              <blockquote className="mt-3 text-foreground/90 flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
