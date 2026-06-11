import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/areas-covered")({
  head: () => ({
    meta: [
      { title: "Driving Lesson Areas in Hull & East Riding | Hull Driving School" },
      { name: "description", content: "Driving lessons across Hull and East Riding including Bransholme, Sutton, Kingswood, Hessle, Cottingham, Anlaby, Willerby, Beverley and Hedon." },
      { property: "og:title", content: "Areas Covered" },
      { property: "og:description", content: "Driving lessons across Hull and East Riding." },
      { property: "og:url", content: "/areas-covered" },
    ],
    links: [{ rel: "canonical", href: "/areas-covered" }],
  }),
  component: Areas,
});

const areas = [
  { name: "Hull City Centre", note: "Bus lanes, one-ways, and pedestrians. Great for late-stage lessons." },
  { name: "Bransholme", note: "Quiet estates for early lessons and regular test routes." },
  { name: "Sutton", note: "Mix of estates and main roads, useful for building confidence." },
  { name: "Kingswood", note: "Modern roundabouts and dual carriageways near the retail park." },
  { name: "Hessle", note: "Hill starts, junctions, and a route up to the Humber Bridge." },
  { name: "Cottingham", note: "Village roads, mini roundabouts, and busy school-run streets." },
  { name: "Anlaby", note: "A1105 practice and complex junctions near the bypass." },
  { name: "Willerby", note: "Suburban routes with plenty of parking practice." },
  { name: "Beverley", note: "Test-standard routes for confident learners." },
  { name: "Hedon", note: "Country roads and rural junctions east of the city." },
  { name: "Holderness Road", note: "Heavy traffic and bus lanes for real-world practice." },
  { name: "West Hull", note: "Pick-ups across HU3, HU4 and HU5." },
  { name: "East Hull", note: "Pick-ups across HU7, HU8 and HU9." },
  { name: "North Hull", note: "Routes through HU6 and HU7 estates." },
];

function Areas() {
  return (
    <>
      <PageHero eyebrow="Areas covered" title="Driving lessons across Hull and East Riding." sub="We pick up from home, college, and work. If your area isn't listed, ask. We probably cover it." />
      <section className="section-y">
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a) => (
            <div key={a.name} className="card-surface p-5">
              <h3 className="!text-lg">{a.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
