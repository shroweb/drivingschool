import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hull Driving School — Call 01482 647786" },
      { name: "description", content: "Call, text, WhatsApp, or send a message. We reply the same day. Driving lessons across Hull and East Riding." },
      { property: "og:title", content: "Contact Hull Driving School" },
      { property: "og:description", content: "Call, text, WhatsApp, or message. Same-day reply." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch." sub="Call, text, WhatsApp, or fill in the form. We reply the same day, usually within a couple of hours." />
      <section className="section-y">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <a href="tel:01482647786" className="card-surface p-5 flex items-center gap-4 hover:!border-primary">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Call</p>
                <p className="font-medium">01482 647786</p>
              </div>
            </a>
            <a href="sms:07971867026" className="card-surface p-5 flex items-center gap-4 hover:!border-primary">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-accent text-accent-foreground"><MessageCircle className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Text or WhatsApp</p>
                <p className="font-medium">07971 867026</p>
              </div>
            </a>
            <a href="mailto:hulldrivingschool@gmail.com" className="card-surface p-5 flex items-center gap-4 hover:!border-primary">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-muted text-foreground"><Mail className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-medium break-all">hulldrivingschool@gmail.com</p>
              </div>
            </a>
            <div className="card-surface p-5 flex items-start gap-4">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-muted text-foreground"><Clock className="h-5 w-5" aria-hidden /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                <p className="font-medium">Mon to Sat, 8am to 8pm</p>
                <p className="text-sm text-muted-foreground mt-1">We reply same day, usually within a couple of hours.</p>
              </div>
            </div>
            <div className="card-surface p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Where we teach</p>
              <p className="mt-1 font-medium">Hull and East Riding of Yorkshire</p>
              <p className="text-sm text-muted-foreground mt-1">Pick-ups from home, college, and work across the city.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
